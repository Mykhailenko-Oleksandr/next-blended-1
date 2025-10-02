import css from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        <p className={css.text}>© {new Date().getFullYear()} Postly. All rights reserved.</p>
        <div className={css.wrap}>
          <p className={css.text}>Developer: Oleksandr Mykhailenko</p>
          <p className={css.text}>
            Contact us: &nbsp;
            <a href="mailto:saniamykhailenko@gmail.com">saniamykhailenko@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
