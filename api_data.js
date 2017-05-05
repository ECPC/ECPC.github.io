define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "C__Users_w7_Desktop_documentacion_api_doc_main_js",
    "groupTitle": "C__Users_w7_Desktop_documentacion_api_doc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "/api/login",
    "title": "Login",
    "description": "<p>Intenta iniciar sesión en el servidor, el mensaje de error 0 quiere decir que el usuario todavía no valida su cuenta, el error 1 quiere decir que ingreso las credenciales incorrectas</p>",
    "name": "Login",
    "group": "General",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>El correo electrónico del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Contraseña del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de la petición, OK si fue exitoso, ERR si algo no anda bien</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "redirect",
            "description": "<p>La URL a la página que podremos redireccionarnos</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "/api/logout",
    "title": "Logout",
    "description": "<p>Cierra la sesión del usuario</p>",
    "name": "Logout",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<p>Regresa una redirección a la pagina de ezpc.html</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "General"
  },
  {
    "type": "get",
    "url": "/api/token",
    "title": "Token",
    "description": "<p>Obtiene el token de sesión del usuario</p>",
    "name": "Token",
    "group": "General",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "none",
            "description": "<p>Token de sesión</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "General"
  },
  {
    "type": "post",
    "url": "api/order/create",
    "title": "Hacer pedido",
    "description": "<p>Efectúa un pedido y aplica ganancias al usuario y sus padres</p>",
    "name": "CreateOrder",
    "group": "Pedido",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "products",
            "description": "<p>El arreglo de ids de los productos a comprar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>La dirección del pedido</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<p>Aplica ganancias al usuario y sus padres</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Pedido"
  },
  {
    "type": "get",
    "url": "api/order/history",
    "title": "Historial de pedidos",
    "description": "<p>Regresa el historial de pedidos efectuados por el usuario</p>",
    "name": "OrderHistory",
    "group": "Pedido",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "---",
            "description": "<p>Arreglo del historial de todos los pedidos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de respuesta:",
          "content": "[\n\t{\n\t\t\"id\":3,\n\t\t\"user_id\":1,\n\t\t\"total_price\":600,\n\t\t\"total_points\":12,\n\t\t\"address\":\"Calle bonita\",\n\t\t\"created_at\":\"2017-05-05 00:07:53\"\n\t},\n\t{\n\t\t\"id\":4,\n\t\t\"user_id\":1,\n\t\t\"total_price\":800,\n\t\t\"total_points\":16,\n\t\t\"address\":\"Calle bonita\",\n\t\t\"created_at\":\"2017-05-05 00:07:53\"\n\t},etc...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Pedido"
  },
  {
    "type": "get",
    "url": "/api/product",
    "title": "Obtener productos",
    "description": "<p>Obtiene la información de todos los productos</p>",
    "name": "Product",
    "group": "Productos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "---",
            "description": "<p>El arreglo de todos los productos del bazar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de respuesta:",
          "content": "[\n\t{\n\t\t\"id\":1,\n\t\t\"name\":\"producto1\",\n\t\t\"description\":\"descripci\\u00f3n de producto1\",\n\t\t\"image_path\":\"\\/img\\/productos\\/producto1.png\",\n\t\t\"price\":200,\n\t\t\"points\":4\n\t},\n\t{\n\t\t\"id\":2,\n\t\t\"name\":\"producto2\",\n\t\t\"description\":\"descripci\\u00f3n de producto2\",\n\t\t\"image_path\":\"\\/img\\/productos\\/producto2.png\",\n\t\t\"price\":400,\n\t\t\"points\":8\n\t},etc...\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Productos"
  },
  {
    "type": "get",
    "url": "/api/user/{id}/activateAccount/{activation_token}",
    "title": "Activación de cuenta por correo",
    "description": "<p>Activa la cuenta mediante un token de verificación</p>",
    "name": "ActivateAccount",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<hr>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/user/activateAccountForced",
    "title": "Activación de cuenta secundaria",
    "description": "<p>Activa la cuenta de forma secundaria</p>",
    "name": "ActivateAccountForced",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<hr>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/api/user/create",
    "title": "Crear",
    "description": "<p>Registra a un nuevo usuario, envía un correo de verificación, y regresa una redirección a emailCheck.html</p>",
    "name": "CreateUser",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>El correo electrónico del usuario</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>La contraseña del usuario</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Estado de la petición, OK si fue exitoso, ERR si algo no anda bien</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Mensaje de error</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "redirect",
            "description": "<p>emailCheck.html</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/user",
    "title": "Información de usuario",
    "description": "<p>Obtiene la información del usuario en sesión</p>",
    "name": "GetUser",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>id del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "parent_partner",
            "description": "<p>El socio que registro al usuario, si es que tiene uno</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Nombre de usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birthdate",
            "description": "<p>String que representa la fecha de nacimiento</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "onboarding",
            "description": "<p>Booleana que define si el usuario ya completo el proceso de onboarding</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "paymethod",
            "description": "<p>Booleana que define si el usuario ya establecio un método de pago</p>"
          },
          {
            "group": "Success 200",
            "type": "Bool",
            "optional": false,
            "field": "account_activated",
            "description": "<p>Booleana que define si el usuario ya verificó su correo</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de respuesta:",
          "content": "{\n\t\"id\" : 1,\n\t\"parent_partner\" : null,\n\t\"name\" : \"test1\",\n\t\"email\" : \"test1@hotmail.com\",\n\t\"birthdate\" : \"1997-05-25\",\n\t\"onboarding\" : 1,\n\t\"paymethod\" : 0,\n\t\"account_activated\" : 1\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/user/monthEarningsHistory",
    "title": "Historial de progreso",
    "description": "<p>Regresa el historial de los seis meses anteriores (no incluye el mes actual)</p>",
    "name": "MonthEarningsHistory",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "points",
            "description": "<p>Los puntos acumulados de los seis meses anteriores, ej. [Noviembre, Diciembre, Enero, Febrero, Marzo, Abril]</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "earnings",
            "description": "<p>Arreglo de las ganancias de los seis meses anteriores, ej. [Noviembre, Diciembre, Enero, Febrero, Marzo, Abril]</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de respuesta:",
          "content": "{\n\t\"id\" : 1,\n\t\"points\" : [105, 100, 100, 101, 99, 103],\n\t\"earnings\" : [4340.00, 3440.30, 3487.60, 5049.00]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/user/onboardingComplete",
    "title": "Onboarding completado",
    "description": "<p>Asigna el onboarding del usuario como &quot;completado&quot;</p>",
    "name": "OnboardingComplete",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<hr>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/user/progressInfo",
    "title": "Progreso de mes actual",
    "description": "<p>Retorna el progreso del usuario en el mes actual</p>",
    "name": "ProgressInfo",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "partners",
            "description": "<p>El número de socios hijos directos del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "earnings",
            "description": "<p>Las ganancias acumuladas a lo largo del mes</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "points",
            "description": "<p>Los puntos acumulados a lo largo del mes</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de respuesta:",
          "content": "{\n\t\"partners\" : 4,\n\t\"earnings\" : 28,\n\t\"points\" : 164\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "get",
    "url": "/api/user/selfPartnerNet",
    "title": "Red de socios",
    "description": "<p>Regresa la red socios a partir del usuario</p>",
    "name": "SelfPartnerNet",
    "group": "Usuario",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>del usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User Nombre de usuario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>Correo electrónico</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "parent",
            "description": "<p>El socio que registro al usuario, si es que tiene uno</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "childs",
            "description": "<p>Un arreglo recursivo de los socios hijos</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Ejemplo de respuesta:",
          "content": "{\n\t\"id\":1,\n\t\"name\":\"test1\",\n\t\"email\":\"test1@hotmail.com\",\n\t\"parent\":null,\n\t\"childs\":[\n\t\t{\"id\":2,\n\t\t\"email\":\"test2@hotmail.com\",\n\t\t\"name\":\"test2\",\"childs\":[]},\n\t\t{\"id\":3,\n\t\t\"email\":\"test3@hotmail.com\",\n\t\t\"name\":\"test3\",\n\t\t\"childs\":[]}\n\t]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  },
  {
    "type": "post",
    "url": "/api/user/subscribe",
    "title": "Inscribir socio",
    "description": "<p>Inscribe un nuevo socio y envía un correo con los datos de registro</p>",
    "name": "Subscribe",
    "group": "Usuario",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>El nombre del nuevo socio a registrar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>El correo electrónico del nuevo socio a registrar</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "none",
            "optional": false,
            "field": "none",
            "description": "<p>Envía un correo con la contraseña al nuevo socio</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./example.js",
    "groupTitle": "Usuario"
  }
] });
