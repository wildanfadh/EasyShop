<div align="center" id="top">
  <h1>EasyShop</h1>
  <p>Simple E-commerce frontend application built with React + TypeScript</p>

  <p align="center">
    <img alt="Github top language" src="https://img.shields.io/github/languages/top/wildanfadh/easyshop?color=56BEB8">
    <img alt="Github language count" src="https://img.shields.io/github/languages/count/wildanfadh/easyshop?color=56BEB8">
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/wildanfadh/easyshop?color=56BEB8">
    <img alt="License" src="https://img.shields.io/github/license/wildanfadh/easyshop?color=56BEB8">
  </p>

  <p align="center">
    <a href="#dart-about">About</a> &#xa0; | &#xa0;
    <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
    <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
    <a href="#file_folder-project-structure">Structure</a> &#xa0; | &#xa0;
    <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
    <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
    <a href="#memo-license">License</a>
  </p>
</div>

<br>

## :dart: About

EasyShop is a simple E-commerce frontend application built as a learning/portfolio project. It uses the [Platzi Fake Store API](https://fakeapi.platzi.com/) as a mock backend for products, categories, and authentication.

The design is inspired by a [Cosmetic Store Figma Website Template](https://ui4free.com/website-templates/cosmetic-store-figma-website-template.htm) from ui4free.com.

## :sparkles: Features

### Implemented
- :heavy_check_mark: Home page with hero section, categories, and product carousel
- :heavy_check_mark: User authentication (login) with API integration
- :heavy_check_mark: Cookie-based route protection
- :heavy_check_mark: Responsive design (mobile & desktop)
- :heavy_check_mark: Swiper.js product carousel with breakpoints
- :heavy_check_mark: SweetAlert2 notifications

### Placeholder (UI only)
- :construction: Registration page
- :construction: Password reset flow
- :construction: Product list page
- :construction: Product detail page
- :construction: Shopping cart
- :construction: Checkout flow (account info, delivery, payment)
- :construction: Order management (list & detail)

## :rocket: Technologies

| Layer | Technology |
|-------|------------|
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Framework | [React 18](https://reactjs.org/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| State Management | [Redux](https://redux.js.org/) + Redux Thunk |
| Routing | [React Router DOM v6](https://reactrouter.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) |
| HTTP Client | [Axios](https://axios-http.com/) |
| Forms | [React Hook Form](https://react-hook-form.com/) |
| Carousel | [Swiper.js](https://swiperjs.com/) |
| Alerts | [SweetAlert2](https://sweetalert2.github.io/) |
| Package Manager | [Yarn](https://yarnpkg.com/) |

## :file_folder: Project Structure

```
src/
├── main.tsx                    # Entry point
├── App.tsx                     # Root component (Redux Provider + Router)
├── config/
│   └── index.ts                # API base URL
├── router/
│   └── index.tsx               # Route definitions
├── layouts/
│   ├── auth/index.tsx          # Auth layout (login, register)
│   └── main/index.tsx          # Main layout (with auth guard)
├── redux/
│   ├── types/                  # Action type constants
│   ├── reducers/               # Redux reducers
│   └── actions/                # Redux actions (API calls)
├── components/
│   ├── CardProduct.tsx         # Product card component
│   ├── CardCategory.tsx        # Category card component
│   └── CardCarousel.tsx        # Swiper carousel component
├── views/
│   ├── auth/                   # Auth pages (login, register, reset)
│   └── main/                   # Main pages (home, products, cart, checkout)
└── assets/                     # Images and SVGs
```

## :white_check_mark: Requirements

Before starting, you need to have [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/) (v16+) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/wildanfadh/easyshop

# Access
$ cd easyshop

# Install dependencies
$ yarn

# Run development server
$ yarn dev

# The server will initialize at http://localhost:3000
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start development server |
| `yarn build` | Build for production (TypeScript check + Vite build) |
| `yarn preview` | Preview production build |

## :globe_with_meridians: API

This project uses [Platzi Fake Store API](https://fakeapi.platzi.com/) as the backend:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/auth/login` | POST | User login |
| `/products` | GET | Get all products |
| `/categories` | GET | Get all categories |
| `/users` | GET/POST | User management |

Base URL: `https://api.escuelajs.co/api/v1`

## :art: Color Palette

The project uses a custom DaisyUI theme with earthy/green tones:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | `#2B463C` | Dark green |
| Secondary | `#688F4E` | Medium green |
| Accent | `#B1D182` | Light green |
| Neutral | `#F4F1E9` | Cream/beige |

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

<br>

Made with :heart: by [Wildan Fadh](https://github.com/wildanfadh)

<a href="#top">Back to top</a>
