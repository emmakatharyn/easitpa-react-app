function Contact() {
  return (
    <section id='contact'>
      <h2 className='section-header'>Contact Us</h2>
      <div className='contact-flex-container'>
        <div>
          <h3>Santa Fe</h3>
          <p>
            PO Box 9054 <br />
            Santa Fe, NM 87504
          </p>
          <p>
            Phone: <a href='tel:18002333164'>(800) 233-3164</a> |
            <a href='tel:15059884974'>(505) 988-4974</a>
          </p>
          <p>Fax: (505) 988-8943</p>
          <p>
            Email: <a href='mailto:sf@easitpa.com'>sf@easitpa.com</a>
          </p>
        </div>
        <div>
          <h3>Albuquerque (EASI GOV, Inc.)</h3>
          <p>
            1200 San Pedro Drive NE <br />
            Albuquerque, NM 87110
          </p>
          <p>
            Phone: <a href='tel:15052446000'>(505) 244-6000</a> | Toll Free:
            <a href='tel:8556181800'>(855) 618-1800</a>
          </p>
          <p>Fax: (505) 244-6009</p>
          <p>
            Email: <a href='mailto:SONM@easitpa.com'>SONM@easitpa.com</a> |
            <a href='mailto:FSA@easitpa.com'>FSA@easitpa.com</a>
          </p>
        </div>
      </div>
      <div className='biz-hours-blurb'>
        <p>
          <b>Business Hours: Monday - Friday 8:00 AM - 5:00 PM</b>
        </p>
        <p>
          <em>
            Erisa is closed for New Year's Eve, President's Day, Memorial Day,
            Independence Day, Labor Day, Thanksgiving (two days) and Christmas
            (two days).
          </em>
        </p>
      </div>
    </section>
  );
}

export default Contact;
