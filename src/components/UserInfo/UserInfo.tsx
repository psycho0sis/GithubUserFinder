import { ReactComponent as CompanyIcon } from 'assets/icon-company.svg';
import { ReactComponent as LocationIcon } from 'assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from 'assets/icon-twitter.svg';
import { ReactComponent as BlogIcon } from 'assets/icon-website.svg';
import { InfoItem, InfoItemProps } from 'components/InfoItem';
import { LocalGithubUser } from 'types';

import styles from './UserInfo.module.scss';

type UserInfoProps = Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'>;

export const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
      isLink: true,
    },
  ];

  return (
    <div className={styles.userInfo}>
      {items.map((item, i) => (
        <InfoItem {...item} key={i} />
      ))}
    </div>
  );
};
