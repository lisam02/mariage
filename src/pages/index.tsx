import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './index.css';

const cards = [
  {
    title: 'Programme',
    href: '/docs/programme',
    image: '/img/marguerite.png',
  },
  {
    title: 'Lieu',
    href: '/docs/lieu',
    image: '/img/olivier.png',
  },
  {
    title: 'Transport',
    href: '/docs/transport-hebergement',
    image: '/img/iris.png',
  },
  {
    title: 'Hébergement',
    href: '/docs/transport-hebergement',
    image: '/img/eucalyptus.png',
  },
  {
    title: 'Cagnotte',
    href: '/docs/cagnotte',
    image: '/img/marguerite.png',
  },
  {
    title: 'Réponse',
    href: '/rsvp',
    image: '/img/olivier.png',
  },
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
              Nous avons hâte de célébrer ce moment unique avec vous en Provence 🌿
            </p>
          </div>

          <div className="heroImage" />
        </section>

        <section className="welcome">
          <h2>Bienvenue</h2>

          <p>
            Retrouvez ici toutes les informations pratiques pour notre mariage :
          </p>

          <div className="cards">
            {cards.map((card) => (
              <Link className="card" href={card.href} key={card.title}>
                <div className="cardImageWrapper">
                  <img
                    src={useBaseUrl(card.image)}
                    alt={card.title}
                    className="cardImage"
                  />
                </div>

                <div>{card.title}</div>
              </Link>
            ))}
          </div>
        </section>
        <p className="deadline">
            <center> 
              Merci de confirmer votre présence avant le 31 octobre 2026.
            </center>
        </p>
      </main>
    </Layout>
  );
}