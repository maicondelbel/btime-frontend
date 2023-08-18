import styled from 'styled-components'

export const HeaderContainer = styled.header`
  border-bottom: 1px solid ${(props) => props.theme['--gray-200']};
  padding: 0 1.5rem;
`

export const HeaderContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90rem;
  margin: 0 auto;
  height: 4rem;
  min-height: 4rem;
`

export const LogoContainer = styled.div`
  width: 6rem;
`

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const AvatarContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 99999px;
  overflow: hidden;

  img {
    object-fit: cover;
    width: 100%;
  }
`

export const ProfileName = styled.span`
  font-weight: 700;
`
