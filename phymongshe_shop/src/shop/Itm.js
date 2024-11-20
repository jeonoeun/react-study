import { useNavigate, useParams } from "react-router-dom";

const Itm = ({ shopList, cart, setCart }) => {
  const { itm } = useParams();
  const navigate = useNavigate();
  const matchItm = shopList.find((it) => itm === String(it.id));

  return (
    <section className="shopItm">
      <div className="inner">
        <div className="box">
          <img src={matchItm.src} alt="" />
        </div>
        <div className="right">
          <div className="name">{matchItm.name}</div>
          <div className="des">{matchItm.des.substring(0, 300)} ...</div>
          <ul className="color">
            {matchItm.color.map((color, idx) => {
              return (
                <li style={{ background: color.hex_value }} key={idx}>
                  {color.hex_value}
                </li>
              );
            })
            }
          </ul>
          <div className="price">
            <span>{matchItm.price.toLocaleString()}</span> 원
          </div>
          <button
            onClick={() => {
              setCart([...cart, { id: matchItm.id, itm: matchItm.name 
              }]);
              navigate("/cart");
            }}
          >
            장바구니 담기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Itm;
