import styled, { css } from 'styled-components';

export const Container = styled.div`
  .background {
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100vh;
    display: none;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  
  .toggle {
    display: flex;
    
    width: 2.667rem;
    height: 2.667rem;
    
    flex-direction: column;
    align-items: flex-end;
    z-index: 21;
    
    cursor: pointer;

    div+div {
      margin-top: 0.4rem;
    }

    div {
      background: #FFF;
      width: 100%;
      height: 0.2rem;

      transition: 0.3s;

      :nth-child(2) {
        width: 70%;
      }

      :nth-child(3) {
        width: 40%;
      }
    }
  }

  ${ props => props.opened && css`
    display: flex;
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;

    .background {
      display: block;
    }
    
    .toggle {
      display: flex;
      align-items: center;
      align-self: flex-end;

      position: fixed;
      top: 3.6rem;
      right: 2rem;

      z-index: 25;

      div {
        :nth-child(2) {
          width: 0;
          opacity: 0;
        }

        :nth-child(1) {
          transform: rotate(-45deg) translateY(0.9rem);
        }

        :nth-child(3) {
          width: 100%;
          transform: rotate(45deg) translateY(-0.9rem);
        }
      }
    }

    nav {
      background: #252B42;
      display: flex;
      justify-content: center;
      
      width: 100%;
      max-width: 50rem;
      height: 100vh;
      padding: 2rem;
      overflow-y: auto;

      position: fixed;
      right: 0;
      top: 0;

      ul {
        flex-direction: column;
        text-align: center;

        li+li {
          margin-top: 5rem;
        }

        li {
          font-size: 2.8rem;
        }
      }

      #subscribe {
        display: none;
      }
    }
  `}

  @media(min-width: 790px) {    
    ${ props => !props.opened && css`
      .toggle {
        display: none;
      }
    `}
  }
`;

export const Nav = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    
    li{

      a {
        position: relative;
        padding: 0.5rem 1.5rem 0.5rem 2.0rem;
        
        text-decoration: none;
        color: #FFF;

        :hover::after {
          content: "";
          position: absolute;
          right: 0;
          top: 0;
          
          background: currentColor;
          width: 0.8rem;
          height: 0.8rem;
          border-radius: 5rem;

          transition: 0.5s;
          animation: fade 0.3s;
        }
      }
    }
  }

  #subscribe {
    display: flex;
    margin-left: 3rem;

    input, button {
      width: 100%;
      height: 4rem;
      padding: 0 2.5rem;
      
      border-radius: 5rem;
      border: 0;
      outline: none;
    }

    input {
      background: #EFEFEF;
      min-width: 14rem;
      margin-right: 1.5rem;

      font-size: 1.4rem;
      color: #18171D;
    }

    button {
      background: #EFEFEF;
      max-width: 14.1rem;

      font-size: 1.6rem;
      font-weight: 500;
      cursor: pointer;
      color: #EF2779;
    }
  }
  
  // animações
  @keyframes fade { // animação no hover dos itens da nav
    from {
      width: 40%;
      height: 0.3rem;
      opacity: 0;
    } to {
      width: 0.8rem;
      height: 0.8rem;
      opacity: 1;
    }
  }

  // responsividade
  @media(max-width: 1010px) {
    ul li a {
      padding: 0.8rem !important;
      
      :after {
        top: 0;
        right: 50%;
        left: 50%;
      }
    }
  }

  @media(max-width: 920px) {

    #subscribe {
      margin-left: 1rem !important;

      button,
      input {
        padding: 0 1rem !important;
      }
    }
  }

  @media(max-width: 790px) {
    display: none;
  }
`;

