import React from 'react';
import Layout from '@theme/Layout';
import './rsvp.css';

export default function RSVP() {
  return (
    <Layout title="Votre réponse">
      <main className="rsvpPage">
        <section className="rsvpCard">
          <p className="rsvpEyebrow">Réponse souhaitée avant le 31 octobre 2026</p>

          <h1>Votre réponse</h1>

          <p className="rsvpIntro">
            Merci de confirmer votre présence afin de nous aider à organiser cette belle journée 🌿
          </p>

          <iframe
            src="https://tally.so/r/7RPvZZ"
            width="100%"
            height="1200"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulaire de réponse"
          />
        </section>
      </main>
    </Layout>
  );
}