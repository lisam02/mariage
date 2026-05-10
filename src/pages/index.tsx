import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import './index.css';

const cards = [
  {title: 'Programme', href: '/docs/programme', icon: '🌿'},
  {title: 'Lieu', href: '/docs/lieu', icon: '🏡'},
  {title: 'Hébergement', href: '/docs/hebergement', icon: '🛏️'},
  {title: 'Transport', href: '/docs/transport', icon: '🚗'},
  {title: 'FAQ', href: '/docs/faq', icon: '❔'},
  {title: 'RSVP', href: '/rsvp', icon: '✉️'},
];

export default function Home() {
  return (
    <Layout title="Mariage" description="Site de mariage">
      <main className="weddingPage">
        <section className="hero">
          <div className="botanicalSide" />

          <div className="heroText">
            <p className="eyebrow">Nous nous marions</p>
            <h1>
              Lisa-Marie
              <span>&</span>
              Thomas
            </h1>
            <p className="date">22 mai 2027</p>
            <p className="intro">
              Nous avons hâte de célébrer ce moment unique avec vous en Provence.
            </p>
          </div>

          <div className="heroImage" />
        </section>

        <section className="welcome">
          <h2>Bienvenue</h2>
          <p>
            Retrouvez ici toutes les informations pratiques pour notre mariage :
            programme, lieu, hébergement, transport et RSVP.
          </p>

          <div className="cards">
            {cards.map((card) => (
              <Link className="card" href={card.href} key={card.title}>
                <div className="cardIcon">{card.icon}</div>
                <div>{card.title}</div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}