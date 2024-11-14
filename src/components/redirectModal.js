import './rdmodal.css'
function RedirectModal ({setModalOpen}) {

    return (
        <div
        className="rd-modal-wrapper"
      >
        <div
          className="rd-modal"
          onClick={e => e.stopPropagation()}
        >
        <section className="rd-text">
            <p>I am now hosting this game - and building others - at</p> 
            <p>
                <a href="https://scottish-football-simulators.co.uk/">www.scottish-football-simulators.co.uk</a>
            </p>
            <p>This site is no longer being updated.</p>
        </section>
        <button className="rd-modalExit-btn" onClick={() => setModalOpen(false)}>
            Click to Continue on this Site
        </button>
        </div>
        
        </div>
    )
};

export default RedirectModal;