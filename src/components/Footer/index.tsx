import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
// import {PLANET_LINK} from "@/constants";

const Footer: React.FC = () => {
  // 版权信息
  const defaultMessage = '1binbin出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
      /*  {
          key: 'planet',
          title: '用户中心',
          href: PLANET_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://www.code-nav.cn',
          blankTarget: true,
        },*/
        {
          key: 'github',
          title: <><GithubOutlined/> 1binbin GitHub</>,
          href: 'https://github.com/1binbin',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
