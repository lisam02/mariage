import React, {useEffect, useState} from 'react';
import Layout from '@theme/Layout';
import {supabase} from '../lib/supabase';
import './admin.css';

type RSVP = {
  id: string;
  name: string;
  attending: string;
  has_plus_one: boolean;
  plus_one_name: string | null;
  meal: string | null;
  allergies: string | null;
  wants_lodging: boolean;
  lodging_nights: string | null;
  lodging_notes: string | null;
  message: string | null;
  created_at: string;
};

export default function Admin() {
  const [rsvps, setRsvps] = useState<RSVP[]>([]);

  useEffect(() => {
    async function loadRsvps() {
      const {data, error} = await supabase
        .from('rsvps')
        .select('*')
        .order('created_at', {ascending: false});

      if (error) {
        console.error(error);
        return;
      }

      setRsvps(data ?? []);
    }

    loadRsvps();
  }, []);

  const attendingCount = rsvps.filter(
    (r) => r.attending === 'yes'
    ).length;

const absentCount = rsvps.filter(
  (r) => r.attending === 'no'
).length;

const lodgingCount = rsvps.filter(
  (r) => r.wants_lodging
).length;

const plusOneCount = rsvps.filter(
  (r) => r.has_plus_one
).length;

const vegetarianCount = rsvps.filter(
  (r) => r.meal === 'vegetarien'
).length;

  return (
    <Layout title="Admin RSVP">
      <main className="adminPage">
        <section className="adminHeader">
          <p className="adminEyebrow">Administration</p>
          <h1>Réponses RSVP</h1>
          <p>{rsvps.length} réponse(s) enregistrée(s)</p>
        </section>

        <div className="adminStats">
            <div className="statCard">
                <strong>{attendingCount}</strong>
                <span>Présents</span>
            </div>

            <div className="statCard">
                <strong>{absentCount}</strong>
                <span>Absents</span>
            </div>

            <div className="statCard">
                <strong>{plusOneCount}</strong>
                <span>Accompagnants</span>
            </div>

            <div className="statCard">
                <strong>{lodgingCount}</strong>
                <span>Logements</span>
            </div>

            <div className="statCard">
                <strong>{vegetarianCount}</strong>
                <span>Végétariens</span>
            </div>
            🌿
            </div>

        <section className="adminTableWrapper">
          <table className="adminTable">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Présence</th>
                <th>Repas</th>
                <th>Accompagnant</th>
                <th>Logement</th>
                <th>Allergies</th>
                <th>Message</th>
              </tr>
            </thead>

            <tbody>
              {rsvps.map((rsvp) => (
                <tr key={rsvp.id}>
                  <td>{rsvp.name}</td>
                  <td>{rsvp.attending === 'yes' ? 'Présent(e)' : 'Absent(e)'}</td>
                  <td>{rsvp.meal || '-'}</td>
                  <td>
                    {rsvp.has_plus_one
                      ? rsvp.plus_one_name || 'Oui'
                      : '-'}
                  </td>
                  <td>
                    {rsvp.wants_lodging
                      ? rsvp.lodging_nights || 'Oui'
                      : '-'}
                  </td>
                  <td>{rsvp.allergies || '-'}</td>
                  <td>{rsvp.message || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </Layout>
  );
}