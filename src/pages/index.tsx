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
    href: '/docs/transport',
    image: '/img/iris.png',
  },
  {
    title: 'Hébergement',
    href: '/docs/hebergement',
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
            Merci de confirmer votre présence dès que possible, et au plus tard avant le 1<sup>er</sup> octobre 2026, 
            en remplissant le formulaire{' '}
            <Link to="/rsvp">Votre Réponse</Link>.
          </center>
        </p>

        <div className="infoBox">
          <p>
            🌿 Le site sera régulièrement mis à jour au fil des préparatifs.
            N’hésitez donc pas à le consulter de temps en temps.
            <br />
            Si vous avez la moindre question, vous pouvez bien sûr nous contacter directement.
          </p>
        </div>

      </main>
    </Layout>
  );
}