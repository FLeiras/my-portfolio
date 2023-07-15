import "./Habilidades.css";

export const Habilidades = () => {
  return (
    <>
      <div id="habilidades">
        <h3 className="titulo-habilidades">Mis Habilidades</h3>
        <div className="fila">
          <div className="titulo-habilidades codigo">
            <h3>Código</h3>
            <img src="../../../src/images/html.png" alt="" />
            <img src="../../../src/images/js.png" alt="" />
            <img src="../../../src/images/ts.png" alt="" />
            <img src="../../../src/images/dart1.png" alt="" />
          </div>
          <div className="titulo-habilidades codigo">
            <h3>Backend</h3>
            <img src="../../../src/images/node.png" alt="" />
            <img src="../../../src/images/express.png" alt="" />
            <img src="../../../src/images/pos.png" alt="" />
            <img src="../../../src/images/mongo.png" alt="" />
          </div>
          <div className="titulo-habilidades codigo">
            <h3>Frontend</h3>
            <img src="../../../src/images/react.png" alt="" />
            <img src="../../../src/images/vue.png" alt="" />
            <img src="../../../src/images/flutter.png" alt="" />
          </div>
          <div className="titulo-habilidades codigo">
            <h3>Otras</h3>
            <img src="../../../src/images/docker.png" alt="" />
            <img src="../../../src/images/git.png" alt="" />
            <img src="../../../src/images/postman.png" alt="" />
            <img src="../../../src/images/bootstrap.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
