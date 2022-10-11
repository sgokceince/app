function Form() {
    return <div>
        <input type="name" name="name" placeholder="İsim giriniz." />
            <input type="lastname" name="surname" placeholder="Soyisim giriniz." />
            <input type="username" name="username" placeholder="Kullanıcı adı giriniz." />
            <input type="email" name="email" placeholder="Email adresinizi giriniz." />
            <input type="password" name="password" placeholder="Şifre giriniz."/>
            <button type="submit">Kayıt ol</button>
    </div>
}

export default Form;