import React, {useState} from 'react';
import Layout from '@theme/Layout';
import './rsvp.css';
import {supabase} from '../lib/supabase';
import Link from '@docusaurus/Link';

export default function RSVP() {
  const [attending, setAttending] = useState('');
  const [hasPlusOne, setHasPlusOne] = useState(false);
  const [wantsLodging, setWantsLodging] = useState(false);

  return (
    <Layout title="RSVP">
      <main className="rsvpPage">
        <section className="rsvpCard">
          <p className="rsvpEyebrow">Réponse souhaitée avant le 31 octobre 2026.</p>

          <h1>Votre réponse</h1>

          <p className="rsvpIntro">
            Merci de nous confirmer votre présence afin de nous aider à organiser
            cette belle journée 🌿
          </p>

          <form
            className="rsvpForm"
            onSubmit={async (e) => {
              e.preventDefault();

              const formElement = e.currentTarget;
              const form = new FormData(formElement);

              const {error} = await supabase.from('rsvps').insert({
                name: form.get('name'),
                attending,
                has_plus_one: hasPlusOne,
                plus_one_name: form.get('plusOneName'),
                meal: form.get('vegetarian') === 'on' ? 'vegetarien' : 'standard',
                allergies: form.get('allergies'),
                wants_lodging: wantsLodging,
                lodging_nights: wantsLodging ? 'Option logement Pélissanne' : null,
                lodging_notes: form.get('lodgingNotes'),
                message: form.get('message'),
              });

              if (error) {
                console.error(error);
                alert('Erreur lors de l’envoi');
                return;
              }

              alert('Merci 🪻 Votre réponse a bien été enregistrée.');

              formElement.reset();

              setAttending('');
              setHasPlusOne(false);
              setWantsLodging(false);
            }}
          >
            <label>
              Nom et prénom
              <input name="name" type="text" required />
            </label>

            <label>
              Votre présence
              <select
                name="attending"
                required
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
              >
                <option value="">Choisir...</option>
                <option value="yes">Je serai présent(e)</option>
                <option value="no">Je ne pourrai pas venir</option>
              </select>
            </label>

            {attending === 'yes' && (
              <>
                <label className="checkboxLabel">
                  <input
                    type="checkbox"
                    checked={hasPlusOne}
                    onChange={(e) => setHasPlusOne(e.target.checked)}
                  />
                  Je viens avec un accompagnant
                </label>

                {hasPlusOne && (
                  <label>
                    Nom de l’accompagnant
                    <input name="plusOneName" type="text" />
                  </label>
                )}

                <div className="rsvpSubsection">
                  <h2>Dîner</h2>

                  <label className="checkboxLabel">
                    <input type="checkbox" name="vegetarian" />
                    Je souhaite une option végétarienne
                  </label>
                </div>

                <label>
                  Allergies ou contraintes alimentaires
                  <textarea name="allergies" rows={3} />
                </label>

                <div className="rsvpSubsection">
                  <h2>Hébergement</h2>

                  <p className="rsvpHelpText">
                    Sous réserve de disponibilités et d’un nombre suffisant de demandes, 
                    des places pourraient être proposées dans des chambres d'hôtes à Pélissanne.
                    <br />
                    Plus d’informations sont disponibles sur la page{' '}
                    <a
                      href="/mariage/docs/hebergement"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Hébergement
                    </a>
                  </p>

                  <label className="checkboxLabel">
                    <input
                      type="checkbox"
                      checked={wantsLodging}
                      onChange={(e) => setWantsLodging(e.target.checked)}
                    />
                    Je suis intéressé(e) par cette option d’hébergement à Pélissanne
                  </label>

                  {wantsLodging && (
                    <label>
                      Remarques concernant l’hébergement
                      <textarea
                        name="lodgingNotes"
                        rows={3}
                        placeholder="Nombre de personnes concernées, contraintes éventuelles..."
                      />
                    </label>
                  )}
                </div>

                <label>
                  Message pour les mariés
                  <textarea name="message" rows={4} />
                </label>
              </>
            )}

            <button className="rsvpButton" type="submit">
              Envoyer ma réponse
            </button>
          </form>
        </section>
      </main>
    </Layout>
  );
}