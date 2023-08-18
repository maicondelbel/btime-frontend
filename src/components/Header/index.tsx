import {
  AvatarContainer,
  HeaderContainer,
  HeaderContainerWrapper,
  LogoContainer,
  ProfileContainer,
  ProfileName,
} from './styles'

import Logo from '../../assets/logo-btime.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContainerWrapper>
        <LogoContainer>
          <img src={Logo} alt="Logo Btime" />
        </LogoContainer>
        <ProfileContainer>
          <AvatarContainer>
            <img src="/images/avatar.jpg" alt="" />
          </AvatarContainer>
          <ProfileName>Maicon</ProfileName>
        </ProfileContainer>
      </HeaderContainerWrapper>
    </HeaderContainer>
  )
}
