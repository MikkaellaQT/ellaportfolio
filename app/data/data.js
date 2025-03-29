import { FaGithub, FaLinkedin, FaRegEnvelope, FaPhone } from 'react-icons/fa';

export const featuredRepositories = [
  'myportfolio',
  'ella',
  'nodemcu-esp8266-fake-sign-in',
  'face-hand-tracker'
];

export const companies = [
  {
    id: 1,
    institution: 'Western Institute of Technology',
    logo: '/images/institutions/wit.png',
    degree: 'Network Enthusiast',
    startDate: 'Nov 2025',
    endDate: 'Present'
  },
  {
    id: 3,
    institution: 'Anisave',
    logo: '/images/projects/anisave.png',
    degree: 'Web Developer - Student',
    startDate: 'Nov 2025',
    endDate: 'Present'
  }
];

export const institutions = [
  {
    id: 1,
    institution: 'Western Institute of Technology',
    logo: '/images/institutions/wit.png',
    degree: 'Bachelor of Information technology',
    startDate: '2023',
    endDate: 'Present'
  }
];

export const socialMedia = [
  {
    id: 1,
    label: 'Github',
    icon: <FaGithub />,
    url: 'https://github.com/MikkaellaQT'
  },
  {
    id: 2,
    label: 'Gmail',
    icon: <FaRegEnvelope />,
    url: 'mailto:ellajugz20@gmail.com'
  },
  {
    id: 3,
    label: 'Phone',
    icon: <FaPhone />,
    url: 'tel:+9685466231' 
  },
  {
    id: 4,
    label: 'LinkedIn',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/ella-jugado-826052340'
  }
];