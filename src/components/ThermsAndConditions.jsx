import React from 'react';

function TerminosCondiciones() {
  const textoTerminos = `
    1. Introducción
      - Estos términos y condiciones de servicio ("Términos de Servicio") gobiernan el uso de la plataforma TrailNest (la "Plataforma"), una plataforma en línea que ofrece servicios relacionados con la práctica del senderismo y actividades relacionadas. Al usar la Plataforma, acepta cumplir con estos Términos de Servicio. Si no está de acuerdo con alguno de los términos, no puede acceder a la Plataforma.

    2. Uso de la Plataforma
      - Registro: para acceder a ciertas funcionalidades de la Plataforma, deberá crear una cuenta y proporcionar información personal. Toda la información que proporcione debe ser precisa, completa y actualizada.
      - Reservas: la Plataforma le permite hacer reservas para diferentes actividades relacionadas con el senderismo, el camping y otras experiencias al aire libre. Al reservar, acepta cumplir con las condiciones establecidas para esa actividad, incluyendo el pago de las tarifas correspondientes.
      - Política de Cancelación: Cada actividad puede tener su propia política de cancelación. Asegúrese de revisar las condiciones de cancelación antes de reservar.
      - Responsabilidad del Usuario: Usted es responsable de cualquier actividad que ocurra bajo su cuenta y debe mantener su contraseña segura. La Plataforma no se hace responsable por el uso no autorizado de su cuenta.
      - Modificaciones: Nos reservamos el derecho de modificar, suspender o interrumpir cualquier aspecto de la Plataforma en cualquier momento y sin previo aviso.

    3. Limitación de Responsabilidad
      - Daños Directos e Indirectos: La Plataforma y sus afiliados no serán responsables por daños directos, indirectos, especiales, incidentales, emergentes o punitivos, incluso si se ha advertido sobre la posibilidad de tales daños.
      - Pérdida de Beneficios: En ningún caso la Plataforma será responsable por la pérdida de beneficios, ingresos, ahorros anticipados, datos, reputación o buena voluntad.
      - Exclusión de Responsabilidad: En la máxima medida permitida por la ley aplicable, la responsabilidad total de la Plataforma y sus afiliados por todos los reclamos bajo estos Términos de Servicio, incluyendo cualquier garantía implícita, se limitará al monto que pagó en los últimos 6 meses.

    4. Propiedad Intelectual
      - La Plataforma y todo su contenido, incluyendo pero no limitado a, texto, gráficos, logotipos, iconos, imágenes, clips de audio y video, descargas digitales, compilaciones de datos y software, es propiedad de la Plataforma o sus licenciantes y está protegido por leyes de propiedad intelectual.

    5. Ley Aplicable
      - Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes de [País o Región] y cualquier disputa relacionada con estos Términos de Servicio se someterá a la jurisdicción exclusiva de los tribunales [País o Región].

    6. Modificaciones de los Términos de Servicio
      - Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Si los modificamos, le notificaremos mediante un aviso en la Plataforma o mediante otro medio razonablemente eficaz. El uso continuado de la Plataforma después de cualquier modificación constituirá su consentimiento a dichas modificaciones.
    `;
  
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold mb-5">Términos y Condiciones de Servicio</h1>
      <div className="p-5 rounded">
        <p className="text-sm">{textoTerminos}</p>
      </div>
    </div>
  );
}

export default TerminosCondiciones;
