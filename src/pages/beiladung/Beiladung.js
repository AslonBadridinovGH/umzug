import React from 'react';

export default function Beiladung() {
  return (

     <div className='mb-5'>
            
        <section className="container">
            <div className="row">
                <div className="col-12">

                    <div className="mb-3 text-center">
                        <h2 className="h2">Beiladungsanfrage</h2>
                    </div>

                    <div className="mb-3 text-center fs-4">
                        <p>
                           Wir haben regelmäßige Fahrten in verschiedenste Großstädte in ganz Deutschland. 
                           Senden Sie uns unverbindlich eine Beiladungsanfrage und wir melden uns 
                           schnellstmöglich mit einem Angebot und einem möglichen Termin bei Ihnen zurück.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        <section class="container">
            <div class="row">
                <div class="col-12">
                    <div class="p-4 border rounded">
                        <form class="needs-validation" method="post" enctype="multipart/form-data" action="/beiladung/" novalidate>

                            <div class="mb-3">
                                <label for="wpforms-188-field_0" class="form-label">Name <span class="text-danger">*</span></label>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <input type="text" id="wpforms-188-field_0" class="form-control" name="wpforms[fields][0][first]" placeholder="Vorname" required />
                                        <div class="invalid-feedback">Vorname ist erforderlich.</div>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="text" id="wpforms-188-field_0-last" class="form-control" name="wpforms[fields][0][last]" placeholder="Nachname" required />
                                        <div class="invalid-feedback">Nachname ist erforderlich.</div>
                                    </div>
                                </div>
                            </div>

                            <div class="mb-3">
                                <label for="wpforms-188-field_1" class="form-label">E-Mail <span class="text-danger">*</span></label>
                                <input type="email" id="wpforms-188-field_1" class="form-control" name="wpforms[fields][1]" required />
                                <div class="invalid-feedback">Bitte geben Sie eine gültige E-Mail-Adresse ein.</div>
                            </div>

                            <div class="mb-3">
                                <label for="wpforms-188-field_5" class="form-label">Telefonnummer</label>
                                <input type="text" id="wpforms-188-field_5" class="form-control" name="wpforms[fields][5]"/>
                            </div>

                            <div class="mb-3">
                                <label for="wpforms-188-field_4" class="form-label">Datum oder gewünschter Zeitraum <span class="text-danger">*</span></label>
                                <input type="text" id="wpforms-188-field_4" class="form-control" name="wpforms[fields][4]" placeholder="01.03.2023 - 01.04.2023" required/>
                                <div class="invalid-feedback">Dieses Feld ist erforderlich.</div>
                            </div>

                            <div class="mb-3">
                                <label for="wpforms-188-field_2" class="form-label">Von wo nach wo soll Ihre Beiladung versendet werden? <span class="text-danger">*</span></label>
                                <textarea id="wpforms-188-field_2" class="form-control" name="wpforms[fields][2]" rows="3" required></textarea>
                                <div class="invalid-feedback">Dieses Feld ist erforderlich.</div>
                            </div>

                            <div class="mb-3">
                                <label for="wpforms-188-field_3" class="form-label">Was soll versendet werden? (Bitte Maße und ungefähres Gewicht angeben) <span class="text-danger">*</span></label>
                                <textarea id="wpforms-188-field_3" class="form-control" name="wpforms[fields][3]" rows="3" required></textarea>
                                <div class="invalid-feedback">Dieses Feld ist erforderlich.</div>
                            </div>

                            <div class="d-grid gap-2">
                                <button type="submit" id="wpforms-submit-188" class="btn btn-primary">Absenden</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </section>

     </div>

  )
}
