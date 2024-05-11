<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ahmaddzidnii/Web_Anime">
    <img src="https://ui-avatars.com/api/?name=Web%20Anime&rounded=true" alt="Logo" width="80" height="80">
  </a>

Live Production: [https://anime.ahmadzidni.my.id](https://anime.ahmadzidni.my.id)

<h3 align="center">Web List Anime & Search Anime</h3>
  <p align="center">
    Proyek web list anime menggunakan open API dari <a href="https://docs.api.jikan.moe/">Jikan API</a> dengan fitur autentikasi Clerk menyediakan pengalaman interaktif bagi pengguna untuk mengeksplorasi dan mengelola daftar anime favorit mereka. Pengguna dapat menyimpan progress anime yang mereka tonton. Aplikasi ini juga terdapat fitur pencarian memungkinkan pengguna untuk mencari anime berdasarkan judul tertentu. Ketika pengguna memilih anime dari daftar, mereka diarahkan ke halaman detail yang menampilkan sinopsis, tanggal rilis, jumlah episode, dan skor rating.
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![project-anime-web](https://github.com/ahmaddzidnii/Web_Anime/assets/138422717/88281809-b498-452f-9eae-44b4f8b2299c)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![Clerk][Clerk]][Clerk-url]
- [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
- [![Prisma ORM][Prisma]][Prisma-url]
- [![Tailwind Css][Tailwind-CSS]][Tailwind-CSS-url]
- [![Shadcn UI][ShadcnUI]][ShadcnUI-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

Before running this project locally there are several requirements that must be fulfilled including,

- npm or another package manager such as pnpm, yarn etc.
  ```sh
  npm install npm@latest -g
  ```
  or
  ```sh
  npm install pnpm -g
  ```
  or
  ```sh
  npm install yarn -g
  ```
- Create instance in [clerk](https://clerk.com/) dashboard
- Create instance in [sentry](https://sentry.io/) dashboard
- Database setup, in this case I use PostgreSQL, i hosted in [NeonDB](https://neon.tech/)


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/ahmaddzidnii/Web_Anime.git
   ```
2. Change directory
   ```bash
   cd Web_Anime
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
   or
   ```sh
   pnpm install
   ```
   or
   ```sh
   yarn install
   ```
4. Rename `.env.example` to `.env` and change with your credentials
   ```bash
   sudo mv .env.example .env
   ```

   ```conf
   NEXT_PUBLIC_BASE_URL =YOUR_BASE_URL
   NEXT_PUBLIC_ANIME_BASE_URL =https://api.jikan.moe/v4
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
   CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/login
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/register
   NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/anime
   NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/anime
   CLERK_WEBHOOKS_SECRET = YOUR_CLERK_WEBHOOKS_SECRET
   DATABASE_URL=YOUR_DATABASE_URL
   SENTRY_AUTH_TOKEN=YOUR_SENTRY_AUTH_TOKEN
   ```
5. Then run the migration on your database through Prisma ORM by typing the command,
   ```sh
   npx prisma migrate dev
    ```
   or
   ```sh
   npx prisma db push
   ```
6. Finally, generate prisma client by typing the command,
   ```sh
   npx prisma generate
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

1. Run in dev environment
   ```sh
   npm dev
   ```
   or
   ```sh
   pnpm dev
   ```
   or
   ```sh
   yarn dev
   ```
2. Run in production environment
   ```sh
   npm build && npm start
   ```
   or
   ```sh
   pnpm build && pnpm start
   ```
   or
   ```sh
   yarn build && yarn start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

See the [open issues](https://github.com/ahmaddzidnii/Web_Anime/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Ahmad Zidni - [@ahmadzidni1](https://www.instagram.com/ahmadzidni1/)

Project Link: [https://github.com/ahmaddzidnii/Web_Anime](https://github.com/ahmaddzidnii/Web_Anime)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

<!-- ## Acknowledgments

- []()
- []()
- []() -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/ahmaddzidnii/Web_Anime.svg?style=for-the-badge
[contributors-url]: https://github.com/ahmaddzidnii/Web_Anime/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ahmaddzidnii/Web_Anime.svg?style=for-the-badge
[forks-url]: https://github.com/ahmaddzidnii/Web_Anime/network/members
[stars-shield]: https://img.shields.io/github/stars/ahmaddzidnii/Web_Anime.svg?style=for-the-badge
[stars-url]: https://github.com/ahmaddzidnii/Web_Anime/stargazers
[issues-shield]: https://img.shields.io/github/issues/ahmaddzidnii/Web_Anime.svg?style=for-the-badge
[issues-url]: https://github.com/ahmaddzidnii/Web_Anime/issues
[license-shield]: https://img.shields.io/github/license/ahmaddzidnii/Web_Anime.svg?style=for-the-badge
[license-url]: https://github.com/ahmaddzidnii/Web_Anime/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ahmad-zidni-hidayat/
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind-CSS]: https://img.shields.io/badge/Tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=61DAFB
[Tailwind-CSS-url]: https://tailwindcss.com/
[Clerk]: https://img.shields.io/badge/Clerk-20232A?style=for-the-badge&logo=clerk&logoColor=61DAFB
[Clerk-url]: https://clerk.com/
[ShadcnUI]: https://img.shields.io/badge/shadcn%20ui-20232A?style=for-the-badge&logo=shadcnui&logoColor=61DAFB
[ShadcnUI-url]: https://ui.shadcn.com/
[Prisma]: https://img.shields.io/badge/prisma%20ORM-20232A?style=for-the-badge&logo=prisma&logoColor=61DAFB
[Prisma-url]: https://www.prisma.io/
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-20232A?style=for-the-badge&logo=PostgreSQL&logoColor=61DAFB
[PostgreSQL-url]: https://www.postgresql.org/
