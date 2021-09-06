# Reto Técnico MagDemo

App suscripción a planes, solicita ingreso de datos de tarjeta de credito, para poder realizar el pago dela suscripción

[VER DEMO](https://github.com/facebook/create-react-app)

## Formulario Datos de Tarjeta de Credito
El formulario esta validado por Expresiones Regulares
- `Nombres y apellidos `: "Permite ingresar solo letras, entre 3 y 60 digitos, caso contrario el input sera inválido".
- `Numero de Tarjeta `: "Permite ingresar solo numeros, y tiene que tener 16 digitos obligatorios, caso contrario el input sera inválido "
- `F. Expira `: "Permite ingresar solo numero en formato MM/AA; en MM, solo se puede ingresar desde el 01 hasta el 12; en AA, solo se puede ingresar desde 21 hasta 29, caso contrario el input sera inválido".
- `CVC `: "Permite ingresar solo numeros, y tiene que tener 3 digitos obligatorios, caso contrario el input sera inválido "
- `Boton Pagar `: "Solo se procesará el pago, si todos los inputs son válidos"

## Rutas Protegidas (vistas)
### `Confirmacion: `
 Solo se permite ingresar a esta vista por medio de la validacion del formulario, caso contrario redirige a la vista suscripcion
### `Datos: `
 La vista muestra un formulario para el ingreso de una tarjeta de credito y la información del plan seleccioando. En caso se ingresa de cualquier otra manera a esta vista, se mostrará un mensaje que no se ha encontrado un plan selecionado y te muestra un boton hacia la suscripción de planes

## Tipos de los Planes
- `0 `: "al mes"
- `1 `: "bimestral"
- `2 `: "trimestral"
- `3 `: "anual"