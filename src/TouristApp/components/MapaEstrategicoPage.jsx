const MapaEstrategicoPage = () => {
  return (
    <>
      <div className="container container-mapa">
        <div className="row" id="titulo">
          <div className="col-sm-12">
            <h1 className="">
              Mapa Estratégico / <b>2022 - 2023</b> / Tourist App
            </h1>
          </div>
        </div>
        <div className="fundo-branco row-eq-height row" id="linha-um">
          <div className="cabecalho col-lg-2 col-md-12">
            <img src="/logota.png" alt="logo" id="logo" />
          </div>
          <div className="cabecalho col-lg-4 col-md-12">
            <h2>Misión</h2>
            <p>
              Somos una marca aventurera, que impulsa el descubrimiento, la
              exploración, los viajes y el descubrir nuevas emociones.{" "}
            </p>
          </div>
          <div className="cabecalho col-lg-6 col-md-12">
            <h2>Visión</h2>
            <p>
              Ser una empresa intermediaria en el turismo vivencial
              proporcionado por una persona local, quien lleva al turista a
              obtener mayores experiencias enriquecedoras de la ciudad que
              visitará{" "}
            </p>
          </div>
          <div className="cabecalho col-lg-4 col-md-12">
            <h2>Valores</h2>
            <p>
            
              <li type="disc">Seguridad</li>
              <li>Atencion </li>
              <li>Puntualidad</li>
              <li>Honestidad</li>
              <li>Confianza</li>
            
            </p>
            
          </div>
        </div>

        <div className="row fundo-branco linha-padding" id="linha-dois">
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectiva Financiera
            </h3>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">Reducir costo de almacenamiento</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">Desarrollar un plan de marqueting</p>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">
              Incrementar la rentabilidad del software
            </p>
          </div>
          <div className="col-lg-2 col-md-12">
            <p className="btn-1 btn-roxo">Crear alianzas con otras empresas</p>
          </div>
        </div>

        <div
          className="row fundo-branco row-eq-height linha-padding"
          id="linha-quatro"
        >
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectiva Cliente
            </h3>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-amarelo" id="linha-quatro-irregular">
              Aumentar la cartera de clientes
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-amarelo" id="linha-quatro-irregular">
              Incrementar la fiedelizacion de clientes
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-amarelo" id="linha-quatro-irregular">
              Mejorar la satisfaccion de clientes
            </p>
          </div>
        </div>

        <div
          className="row-eq-height fundo-branco row linha-padding"
          id="linha-tres"
        >
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectivas Procesos
            </h3>
          </div>
          <div className="col-md-3 col-sm-12" id="padding-left">
            <p className="btn-1 btn-vermelho">
              Aumentar el numero de idiomas disponibles en la aplicacion
            </p>
          </div>
          <div className="col-md-3 col-sm-12" id="padding-left">
            <p className="btn-1 btn-vermelho">
              Implementar un interfaz amigable y rapida
            </p>
          </div>
          <div className="col-md-2 col-sm-12" id="padding-left">
            <p className="btn-1 btn-vermelho">Fortalecer los medios de pago</p>
          </div>
        </div>

        <div className="row fundo-branco linha-padding" id="linha-cinco">
          <div className="col-lg-3 col-md-12">
            <h3
              data-toggle="tooltip"
              title="Lorem ipsum dolor sit amett cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            >
              Perspectiva Crecimiento
            </h3>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-azul">
              Desarrollar un equipo solido y mejorar el espiritu de trabajo
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-azul">
              Capacitar a los empleados para el uso de nuevas tecnologias
            </p>
          </div>
          <div className="col-lg-3 col-md-12">
            <p className="btn-1 btn-azul">
              Brindar recompensas por conseguir mas turistas
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapaEstrategicoPage;
