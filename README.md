# Diseño de base de datos de Carenta.app

A continuación, se presenta una propuesta de diseño de base de datos más complejo y acercado a Turo.com.

## Diagrama de entidad-relación (ER)

## Descripción de las entidades

### Users
- **user_id** - Identificador único del usuario.
- **first_name** - Nombre del usuario.
- **last_name** - Apellido del usuario.
- **email** - Dirección de correo electrónico del usuario.
- **password** - Contraseña del usuario (cifrada).
- **phone_number** - Número de teléfono del usuario.
- **address** - Dirección del usuario.
- **avatar_url** - URL de la imagen de perfil del usuario.
- **is_verified** - Indica si la cuenta del usuario ha sido verificada.
- **verification_token** - Token utilizado para verificar la cuenta del usuario.
- **reset_password_token** - Token utilizado para restablecer la contraseña del usuario.
- **created_at** - Fecha de creación del usuario.
- **updated_at** - Fecha de última modificación del usuario.

### Listings
- **listing_id** - Identificador único del listado.
- **user_id** - Identificador único del usuario que creó el listado.
- **make** - Marca del vehículo.
- **model** - Modelo del vehículo.
- **year** - Año del vehículo.
- **description** - Descripción del vehículo.
- **location** - Ubicación del vehículo.
- **primary_image_url** - URL de la imagen principal del vehículo.
- **price_per_day** - Precio por día del vehículo.
- **is_available** - Indica si el vehículo está disponible para alquilar.
- **created_at** - Fecha de creación del listado.
- **updated_at** - Fecha de última modificación del listado.

### Reservations
- **reservation_id** - Identificador único de la reserva.
- **user_id** - Identificador único del usuario que realizó la reserva.
- **listing_id** - Identificador único del listado al que se aplicó la reserva.
- **start_date** - Fecha de inicio de la reserva.
- **end_date** - Fecha de fin de la reserva.
- **total_price** - Precio total de la reserva.
- **status** - Estado de la reserva (pendiente, confirmada, cancelada, finalizada).
- **created_at** - Fecha de creación de la reserva.
- **updated_at** - Fecha de última modificación de la reserva.

### Payments
- **payment_id** - Identificador único del pago.
- **reservation_id** - Identificador único de la reserva asociada al pago.
- **user_id** - Identificador único del usuario que realizó el pago.
- **listing_id** - Identificador único del listado al que se aplicó el pago.
- **amount** - Monto del pago.
- **payment_date** - Fecha en que se realizó el pago.
- **payment_method** - Método de pago utilizado para el pago.
- **created_at** - Fecha de creación del pago.
- **updated_at** - Fecha de última modificación del pago.

### Reviews
- **review_id** - Identificador único de la reseña.
- **description** - Descripcion de el review
- **rating** - Numero del 0-5 de votacion
