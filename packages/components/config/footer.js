import { isIntranet, getLang } from '@utils';
import { jumpLocation } from '@utils/locale';

export const getFooterConfig = () => {
  const lang = getLang();
  const isEnglish = lang === 'en';

  const footerLinks = [
    {
      title: isEnglish ? 'Resource' : '资源',
      links: [
        { name: isEnglish ? 'Design Resource' : '设计资源', url: jumpLocation('/source'), target: '_self' },
        { name: 'TDesign Starter', url: jumpLocation('https://tdesign.tencent.com/starter/'), target: '_self' },
      ],
    },
    {
      title: isEnglish ? 'Tencent Design' : '腾讯设计',
      links: [
        { name: 'CoDesign', url: 'https://codesign.qq.com/', target: '_blank' },
        { name: 'TDesign', url: `https://tdesign.${isIntranet() ? 'woa' : 'tencent'}.com`, target: '_self' },
        isIntranet() ? { name: 'TVision', url: 'https://tvision.woa.com/', target: '_blank' } : null,
        isIntranet() ? { name: 'TEditor', url: 'https://teditor.woa.com/', target: '_blank' } : null,
      ].filter((item) => item),
    },
    {
      title: isEnglish ? 'About' : '关于',
      links: [
        { name: isEnglish ? 'About us' : '关于我们', url: jumpLocation('/about/introduce'), target: '_self' },
        { name: isEnglish ? 'Contact us' : '联系我们', url: jumpLocation('/about/contact'), target: '_self' },
      ],
    },
  ];

  return footerLinks;
};
