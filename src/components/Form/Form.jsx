// import React, {useRef, useState} from 'react';
// import {Link, useLocation, useNavigate} from "react-router-dom"
// import Logo from "../../assets/Logo.svg";
// import {useForm} from "react-hook-form";
// import InputMask from "react-input-mask"
// import {CiMail} from "react-icons/ci"
// import {CiUser} from "react-icons/ci"
// import {HiUser} from "react-icons/hi"
// import {BsPhone} from "react-icons/bs"
// import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
// import {instance} from "../../config/api/api";
// import logo from "../../assets/logo.jpg"
// import axios from "axios";
// import {useDispatch} from "react-redux";
// import {loginAcc} from "../../redux/reducers/user.js";
// import {authUser} from "../../redux/reducers/auth";
// import instancer from "../../utils/axios.js"
// import {toast, ToastContainer} from "react-toastify";
//
// const  Form = () => {
//
//     // const password = useRef();
//     // const [passwordView, setPasswordView] = useState(false);
//     const location = useLocation();
//     // const navigate = useNavigate();
//
//     const dispatch = useDispatch();
//
//     // const {
//     //     register,
//     //     handleSubmit,
//     //     formState: {
//     //         errors
//     //     },
//     //     watch
//     // } = useForm({
//     //     mode: "onBlur"
//     // });
//
//     // password.current = watch("password");
//
//     const registerUser = (user) => {
//         axios.post(`${instance}register`, {
//             ...user,
//             point: 0,
//             orders: [],
//             carts: [],
//             favorites: [],
//             city: '',
//             home: '',
//             street: ''
//         }).then((res) => {
//             dispatch(loginAcc(res.data.user))
//             localStorage.setItem('user', JSON.stringify(res.data.user))
//             navigate('/')
//         })
//     };
//
//     const loginUser = (user) => {
//         axios.post(`${instance}login`, user).then((res) => {
//             dispatch(loginAcc(res.data.user))
//             localStorage.setItem('user', JSON.stringify(res.data.user))
//             navigate('/')
//         })
//     };
//
//     const submitForm = (data) => {
//         let {confirmPwd, ...user} = data;
//
//         if (location.pathname === '/login'){
//             loginUser(user)
//         } else {
//             registerUser(user)
//         }
//     };
//
//     // const oneSubmit = (data) =>{
//     //     instancer.post('/register', data)
//     //         .then((res)=>{
//     //             dispatch(authUser(res.data));
//     //             navigate('/')
//     //         })
//     //         .catch((err)=> console.log(err));
//     // };
//
//     // const twoSubmit = (data) =>{
//     //     instancer.post('/login', data)
//     //         .then((res)=> {
//     //             dispatch(authUser(res.data));
//     //             navigate('/')
//     //         })
//     //         .catch((err)=> toast(err.response.data.message));
//     // };
//
//     return (
//         <div className="form">
//             <div className="form__left">
//                 <Link to={'/'}>
//                     <img src={Logo} width={300} alt="" className="form__logo" ref={password}/>
//                 </Link>
//                 <form noValidate action="" className="form__content" onSubmit={handleSubmit(submitForm, oneSubmit)}>
//                     <h2 className="form__content-title">
//                         {
//                              location.pathname === '/login' ? ' WELCOME BACK!' : ' WELCOME!'
//                         }
//                     </h2>
//                     <p className="form__content-text">
//                         {
//                             location.pathname === '/login' ? 'Если у вас нет аккаунта' : 'Если у вас есть аккаунт, то'
//                         }
//                         {
//                             location.pathname === '/login' ? <Link to='/register' className="form__content-link"> зарегистрируйтесь</Link> : <Link to='/login' className="form__content-link"> войдите</Link>
//                         }
//                     </p>
//
//                     <label className="form__label">
//                         <span className="form__label-text">Email</span>
//                         <div className="form__label-field">
//                             <span className="form__label-icon">
//                                 <CiMail/>
//                             </span>
//                             <input {...register('email', {
//                                 required: {
//                                     message: "Email обязателен к заполнению",
//                                     value: true
//                                 },
//                                 minLength: {
//                                     message: "Минимум 10 символов",
//                                     value: 10
//                                 },
//                                 pattern: {
//                                     message: "Напишите правильно свой email",
//                                     value: /^[^ ]+@[^ ]+\.[a-z]{2,5}$/
//                                 }
//                             })} className="form__label-input" type="email" placeholder="Введите свой Email"/>
//                         </div>
//
//                         <p className="register__label-error">
//                             {errors.email && errors.email?.message}
//                         </p>
//                     </label>
//                     {
//                         location.pathname === '/register' && <label className="form__label">
//                             <span className="form__label-text">Имя</span>
//                             <div className="form__label-field">
//                             <span className="form__label-icon">
//                                 <CiUser/>
//                             </span>
//                                 <input {...register('name', {
//                                     required: {
//                                         message: "Имя обязательно к заполнению",
//                                         value: true
//                                     },
//                                     minLength: {
//                                         message: "Минимум 2 символа",
//                                         value: 2
//                                     },
//                                     pattern: {
//                                         message: "Напишите правильно свое имя",
//                                         value: /^[а-яА-ЯёЁa-zA-Z]+$/
//                                     }
//                                 })} className="form__label-input" type="text" placeholder="Введите имя"/>
//                             </div>
//
//                             <p className="register__label-error">
//                                 {errors.name && errors.name?.message}
//                             </p>
//                         </label>
//                     }
//                     {
//                         location.pathname === '/register' && <label className="form__label">
//                             <span className="form__label-text">Фамилия</span>
//                             <div className="form__label-field">
//                             <span className="form__label-icon">
//                                 <HiUser/>
//                             </span>
//                                 <input {...register('surname', {
//                                     required: {
//                                         message: "Фамилия обязательно к заполнению",
//                                         value: true
//                                     },
//                                     minLength: {
//                                         message: "Минимум 2 символа",
//                                         value: 2
//                                     },
//                                     pattern: {
//                                         message: "Напишите правильно свою фамилию",
//                                         value: /^[а-яА-ЯёЁa-zA-Z]+$/
//                                     }
//                                 })} className="form__label-input" type="text" placeholder="Введите фамилию"/>
//                             </div>
//
//                             <p className="register__label-error">
//                                 {errors.surname && errors.surname?.message}
//                             </p>
//                         </label>
//                     }
//                     {
//                         location.pathname === '/register' && <label className="form__label">
//                             <span className="form__label-text">Номер телефона</span>
//                             <div className="form__label-field">
//                              <span className="form__label-icon">
//                                 <BsPhone/>
//                             </span>
//                                 <InputMask mask={`+\\9\\96(999)99-99-99`} {...register('phone', {
//                                     required: {
//                                         message: "Это поле обязательно",
//                                         value: true
//                                     },
//                                     pattern: {
//                                         message: "Заполните номер телефона",
//                                         value: /^\+996\(\d{3}\)\d{2}-\d{2}-\d{2}$/
//                                     }
//                                 })} className="form__label-input" type="tel" placeholder="Введите номер телефона"/>
//                             </div>
//
//                             <p className="register__label-error">
//                                 {errors.phone && errors.phone?.message}
//                             </p>
//                         </label>
//                     }
//
//                     <label className="form__label">
//                         <span className="form__label-text">Пароль</span>
//                         <div className="form__label-field">
//                                 <span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>
//                                     {
//                                         passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>
//                                     }
//                                 </span>
//                             <input {...register('password', {
//                                 required: {
//                                     message: "Пароль обязателен к заполнению",
//                                     value: true
//                                 },
//                                 pattern: {
//                                     message: "Пароль должен содержать не менее 8 символов, заглавную букву, число!",
//                                     value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g
//                                 }
//                             })} className="form__label-input" type={passwordView ? "text" : "password"} placeholder="Введите пароль"/>
//
//
//
//                         </div>
//
//                         <p className="register__label-error">
//                             {errors.password && errors.password?.message}
//                         </p>
//                     </label>
//
//                     {
//                         location.pathname === '/register' && <label className="form__label">
//                             <span className="form__label-text">Подтвердите пароль</span>
//                             <div className="form__label-field">
//                                 {/*<span className="form__label-icon" onClick={() => setPasswordView(prev => !prev)}>*/}
//                                 {/*    {*/}
//                                 {/*        passwordView ? <AiFillEyeInvisible/> : <AiFillEye/>*/}
//                                 {/*    }*/}
//                                 {/*</span>*/}
//                                 <input {...register('confirmPwd', {
//                                     validate: value =>
//                                         value === password.current || "The password do not match"
//                                 })} className="form__label-input" type={passwordView ? "text" : "password"} placeholder="Введите пароль еще раз"/>
//                             </div>
//                             <p className="register__label-error">
//                                 {errors. confirmPwd && errors.confirmPwd?.message}
//                             </p>
//                         </label>
//                     }
//
//                         <button className="form__btn" type="submit">Sign In</button>
//                 </form>
//             </div>
//
//             <div className="form__right">
//                 <img src={logo} alt=""/>
//             </div>
//         </div>
//     );
// };
//
// export default Form;