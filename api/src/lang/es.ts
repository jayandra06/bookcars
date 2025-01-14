import * as env from '../config/env.config'

export const es = {
    ERROR: 'Error interno: ',
    DB_ERROR: 'Error en la solicitud a la base de datos: ',
    SMTP_ERROR: 'Error SMTP - Fallo en el envío del correo electrónico: ',
    ACCOUNT_ACTIVATION_SUBJECT: 'Activación de su cuenta',
    HELLO: 'Hola ',
    ACCOUNT_ACTIVATION_LINK: 'Por favor, active su cuenta haciendo clic en el enlace:',
    REGARDS: `Atentamente,<br>El equipo de ${env.WEBSITE_NAME}`,
    ACCOUNT_ACTIVATION_TECHNICAL_ISSUE: '¡Problema técnico! Haga clic en reenviar para validar su correo electrónico.',
    ACCOUNT_ACTIVATION_LINK_EXPIRED: 'Es posible que su enlace de validación haya expirado. Haga clic en reenviar para validar su correo electrónico.',
    ACCOUNT_ACTIVATION_LINK_ERROR: 'No pudimos encontrar un usuario correspondiente a esta dirección de correo electrónico. Por favor, regístrese.',
    ACCOUNT_ACTIVATION_SUCCESS: 'Su cuenta ha sido validada con éxito.',
    ACCOUNT_ACTIVATION_RESEND_ERROR: 'No pudimos encontrar un usuario correspondiente a esta dirección de correo electrónico. Asegúrese de que su correo electrónico sea correcto.',
    ACCOUNT_ACTIVATION_ACCOUNT_VERIFIED: 'Esta cuenta ya ha sido validada. Por favor, inicie sesión.',
    ACCOUNT_ACTIVATION_EMAIL_SENT_PART_1: 'Se ha enviado un correo de validación a',
    ACCOUNT_ACTIVATION_EMAIL_SENT_PART_2: '. Expirará después de un día. Si no ha recibido el correo de validación, haga clic en reenviar.',
    CAR_IMAGE_REQUIRED: 'El campo de imagen de Car no puede estar vacío: ',
    CAR_IMAGE_NOT_FOUND: 'Archivo de imagen no encontrado: ',
    PASSWORD_RESET_SUBJECT: 'Restablecimiento de contraseña',
    PASSWORD_RESET_LINK: 'Por favor, restablezca su contraseña haciendo clic en el enlace:',
    BOOKING_CONFIRMED_SUBJECT_PART1: 'Su reserva',
    BOOKING_CONFIRMED_SUBJECT_PART2: 'ha sido confirmada.',
    BOOKING_CONFIRMED_PART1: 'Su reserva',
    BOOKING_CONFIRMED_PART2: 'ha sido confirmada y el pago ha sido procesado con éxito.',
    BOOKING_CONFIRMED_PART3: ' Por favor, acuda a nuestra agencia ',
    BOOKING_CONFIRMED_PART4: ' (',
    BOOKING_CONFIRMED_PART5: ') el ',
    BOOKING_CONFIRMED_PART6: ' (hora local) para recoger su vehículo ',
    BOOKING_CONFIRMED_PART7: '.',
    BOOKING_CONFIRMED_PART8: 'Por favor, traiga su identificación, licencia de conducir y el cheque de garantía.',
    BOOKING_CONFIRMED_PART9: 'Debe devolver el vehículo en nuestra agencia ',
    BOOKING_CONFIRMED_PART10: ' (',
    BOOKING_CONFIRMED_PART11: ') el ',
    BOOKING_CONFIRMED_PART12: ' (hora local).',
    BOOKING_CONFIRMED_PART13: 'Por favor, respete las fechas y horarios de recogida y devolución del vehículo.',
    BOOKING_CONFIRMED_PART14: 'Puede seguir su reserva en: ',
    BOOKING_PAY_LATER_NOTIFICATION: 'ha confirmado la reserva',
    BOOKING_PAID_NOTIFICATION: 'ha pagado la reserva',
    CANCEL_BOOKING_NOTIFICATION: 'ha solicitado la cancelación de la reserva',
    BOOKING_UPDATED_NOTIFICATION_PART1: 'El estado de la reserva',
    BOOKING_UPDATED_NOTIFICATION_PART2: 'ha sido actualizado.',
    CONTACT_SUBJECT: 'Nuevo Mensaje desde el formulario de Contacto',
    SUBJECT: 'Asunto',
    FROM: 'De',
    MESSAGE: 'Mensaje',
    LOCATION_IMAGE_NOT_FOUND: 'Imagen del lugar no encontrada',
  }
