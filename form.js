const { useFormik } = window.Formik;
const yup = window.yup;
const { useState } = window.React;

// Definir el esquema de validación con Yup
const validationSchema = yup.object({
  firstName: yup.string().required("El nombre es requerido"),
  lastName: yup.string().required("El apellido es requerido"),
  email: yup
    .string()
    .email("Correo electrónico inválido")
    .required("El correo electrónico es requerido"),
  phone: yup
    .string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Número de teléfono inválido")
    .required("El número de teléfono es requerido"),
});

function App() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-100">
      <div className="intgrtn-input-holder">
        <input
          id="firstName"
          className="intgrtn-input"
          type="text"
          name="firstName"
          placeholder="Nombre"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="error">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="intgrtn-input-holder">
        <input
          id="lastName"
          className="intgrtn-input"
          type="text"
          name="lastName"
          placeholder="Apellido"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="error">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <div className="intgrtn-input-holder">
        <input
          id="email"
          className="intgrtn-input"
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="error">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="intgrtn-input-holder">
        <div className="intgrtn-input-group">
          <div id="country-prefix" className="country-prefix"></div>
          <input
            id="phone"
            className="intgrtn-input-phone"
            type="tel"
            name="phone"
            placeholder="Número de Teléfono"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="error">{formik.errors.phone}</div>
          ) : null}
        </div>
      </div>
      <div className="intgrtn-btn-submit-holder">
        <button className="intgrtn-btn-submit" type="submit">
          REGÍSTRESE AHORA
        </button>
      </div>
    </form>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
