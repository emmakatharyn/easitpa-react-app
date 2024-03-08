function Clients() {
  return (
    <section id='clients' className='section-featured'>
      <div className='container'>
        <h2 className='section-header heading-featured-in'>Our Main Clients</h2>
        <div className='logos'>
          <div className='client'>
            <img
              className='logo'
              src='nmpsia_logo_2024.png'
              alt='NMPSIA logo'
              style={{ marginBottom: "28px" }}
            />
            <h2>New Mexico Public Schools Insurance Authority</h2>
            <p>
              NMPSIA provides comprehensive core insurance programs, including
              reimbursement coverage for the costs of providing due process to
              students with disabilities, for all participating public schools,
              school board members, school board retirees and public school
              employees and retirees by expanding the pool of subscribers to
              maximize cost containment opportunities for required insurance
              coverage.
            </p>
            <a href='https://nmpsia.com/' target='_blank' rel='noreferrer'>
              Website
            </a>
          </div>
          <div className='client'>
            <img
              className='logo'
              src='./images/state-seal-of-new-mexico.png'
              alt='SoNM logo'
            />
            <br />
            <h2>State of New Mexico | Group Benefits Plan</h2>
            <p>
              The State of New Mexico Group Benefits Plan offers competitive,
              comprehensive medical, dental, vision, pharmaceutical, Employee
              Assistance Program, basic and supplemental life insurance,
              flexible spending accounts, and disability benefits to enhance the
              lives of SoNM employees and their qualified family members.
            </p>
            <a
              href='https://www.mybenefitsnm.com/index.html'
              target='_blank'
              rel='noreferrer'
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
