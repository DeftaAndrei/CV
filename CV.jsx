import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import React from 'react';
import './style.css';

const AnimatedButton = ({ text, link, color }) => {
    return (
        <motion.button
            whileHover={{ scale: 1.1, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            style={{
                padding: '0.8rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: color,
                color: '#fff',
                cursor: 'pointer',
                fontFamily: 'Arial, sans-serif',
                fontWeight: 'bold',
                fontSize: '1rem',
                transition: 'background-color 0.3s ease',
                margin: '0.5rem',
            }}
            onClick={() => window.open(link, '_blank')}
        >
            {text}
        </motion.button>
    );
};

const RevealSection = ({ children }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <div
            ref={ref}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(50px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
        >
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
            {/* Header */}
            <header style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: 'var(--primary-color)', color: '#fff' }}>
                <motion.h1 whileHover={{ scale: 1.1 }} style={{ fontSize: '3rem', margin: 0 }}>
                    Defta Andrei Robert
                </motion.h1>
                <p>📍 Bucuresti | 📧 Email: ddeftaandrei@gmail.com</p>
                <p>🔗 <a href="https://www.linkedin.com/in/andrei-defta-6122501a0/" style={{ color: '#fff', textDecoration: 'underline' }}>LinkedIn</a></p>
                <p><strong>Rol:</strong> Future Developer Full-Stack</p>
            </header>

            {/* Despre Mine */}
            <RevealSection>
                <section id="summary" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>Despre Mine</h2>
                    <p>
                        Sunt un student la UTCB, specializarea Automatica si Informatica Aplicata, pasionat de programare și tehnologie.
                        Îmi place să invăț lucruri noi și să lucrez la proiecte interesante. Imi place sa invat sa gasesc solutii si
                        sa imi bat capul cu probleme noi.
                    </p>
                </section>
            </RevealSection>

            {/* Butoane pentru portofoliu și LinkedIn */}
            <section className="button-container" style={{ textAlign: 'center', margin: '2rem 0' }}>
                <AnimatedButton text="GitHub Portfolio" link="https://github.com/DeftaAndrei" color="var(--accent-color)" />
                <AnimatedButton text="LinkedIn Profile" link="https://www.linkedin.com/in/andrei-defta-6122501a0/" color="var(--primary-color)" />
            </section>

            {/* Competențe Tehnice */}
            <RevealSection>
                <section id="skills" style={{ padding: '2rem', backgroundColor: 'var(--secondary-color)', color: '#fff' }}>
                    <h2>💻 Competențe Tehnice</h2>
                    <dl>
                        <dt><strong>Python</strong></dt>
                        <dd>
                            <ul>
                                <li><strong>Baze de date:</strong> SQLAlchemy, SQLite, PostgreSQL</li>
                                <li><strong>Vizualizarea datelor:</strong> Matplotlib, Seaborn, Plotly</li>
                                <li><strong>Machine Learning:</strong> Scikit-learn, TensorFlow (începător), Pandas, NumPy</li>
                                <li><strong>Interfețe Grafice:</strong> PyQt5, Tkinter</li>
                                <li><strong>Automatizări:</strong> Selenium, BeautifulSoup</li>
                            </ul>
                        </dd>
                        <dt><strong>Dezvoltare Aplicații Web</strong></dt>
                        <dd>
                            <ul>
                                <li><strong>Framework-uri Backend:</strong> Flask</li>
                                <li><strong>API-uri:</strong> Crearea de API-uri REST utilizând Flask</li>
                                <li>Scop viitor: Să încep să folosesc Django pentru proiecte complexe.</li>
                            </ul>
                        </dd>
                        <dt><strong>Limbaje de Programare</strong></dt>
                        <dd>Python, Java, HTML5, CSS3, JavaScript</dd>
                    </dl>
                </section>
            </RevealSection>

            {/* Educație */}
            <RevealSection>
                <section id="education" style={{ padding: '2rem', textAlign: 'center' }}>
                    <h2>🎓 Educație</h2>
                    <article>
                        <h3>UTCB Hidrotehnica specializarea Automatica si Informatica Aplicata</h3>
                        <p><strong>A . I. A.</strong></p>
                        <p>2020–2025</p>
                    </article>
                </section>
            </RevealSection>

            {/* Subsol */}
            <footer style={{ textAlign: 'center', padding: '1rem', backgroundColor: 'var(--primary-color)', color: '#fff' }}>
                <p>© 2024 Defta Andrei Robert. Toate drepturile rezervate.</p>
            </footer>
        </div>
    );
};

export default App;
