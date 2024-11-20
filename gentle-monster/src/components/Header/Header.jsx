import { Link } from "react-router-dom";
import "../Header/Header.scss";
import User from "../User/User";
import { useAuthContext } from "../../context/AuthContext";
import CartStatus from "../CartStatus/CartStatus";

const Header = () => {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="Header">
      <div className="bar">
        <div className="inner">
          <ul className="util">
            <li>매장 찾기</li>
            <li>고객센터</li>
            <li>주문조회</li>
            <li>택배 서비스</li>
            {user && (
              <li>
                <User user={user} />
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <h1 className="logo">
            <Link to="/">
              <img src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
            </Link>
          </h1>
          <nav className="nav">
            <ul>
              {user && user.isAdmin && (
                <li>
                  <Link to="/products/new">새로운 제품 등록</Link>
                </li>
              )}
              <li>
                <Link to="/products">전제품</Link>
              </li>
              <li>
                <Link to="/sunglasses">선글라스</Link>
              </li>
              <li>
                <Link to="/glasses">안경</Link>
              </li>
              <li>
                <Link to="/brandIssue">브랜드 이슈</Link>
              </li>
              <li>
                <Link to="/carts">
                  <CartStatus />
                </Link>
              </li>
              <li className="button">
                {!user && (
                  <div className="box" onClick={login}>
                    <span>로그인</span>
                  </div>
                )}
                {user && (
                  <div className="box" onClick={logout}>
                    <span>로그아웃</span>
                  </div>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
