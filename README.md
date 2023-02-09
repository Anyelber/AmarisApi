# Amaris Api Test

Apis creadas con fines de una prueba de Amaris.

#APIs

POST:  auth

Esta api es para el inicio de sesión, se utiliza para poder obtener un token (JWT) y poder utilizar las otras apis 

Roles: Administrador, Editor, Lector


POST:  verifyToken

Esta api es para la verificación del token (JWT) y poder validar si el token es correcto o incorrecto.
 
Roles: Administrador, Editor, Lector


POST:  getSlidersInfo

Con esta api podemos obtener todos las tarjetas que están guardadas en la base de datos para armar el slider en el frontend.

Roles: Administrador, Editor, Lector


POST:  saveSliderInfo

Con esta api podemos crear una tarjeta para el slider con la información necesaria que debe ser enviada por parametros.
 
Roles: Administrador, Editor


POST:  updateSliderInfo

Con esta api podemos actualizar los datos básicos de una tarjeta del slider enviándole la nueva información básica y el id por parámetro

Roles: Administrador, Editor

POST:  deleteSliderInfo

Con esta api podemos eliminar parcialmente una tarjeta del slider enviando el id y un token valido por parámetro.
 
Roles: Administrador, Editor
