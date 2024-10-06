function showDetails(planet) {
    const detailDiv = document.getElementById("planet-detail");
    let planetInfo = '';

    switch (planet) {
        case 'mercury':
            planetInfo = `
                <h2>Mercury</h2>
                <p><strong>Namesake:</strong> Mercury is named after the swift Roman god Mercury, reflecting its rapid journey around the Sun.</p>
                <p><strong>Size:</strong> With a radius of 1,516 miles (2,440 kilometers), Mercury is just over one-third the size of Earth.</p>
                <p><strong>Distance:</strong> Mercury orbits the Sun at an average distance of 36 million miles (58 million kilometers), or 0.4 astronomical units (AU) away.</p>
                <p>Mercury experiences extreme temperature variations, with daytime highs reaching up to 800°F (430°C) and nighttime lows dropping to -290°F (-180°C). Despite being closest to the Sun, it is not the hottest planet; that title belongs to Venus. The planet has a very thin atmosphere, which cannot retain heat, contributing to these drastic temperature swings.</p>
                <p>Mercury has a unique 3:2 spin-orbit resonance, meaning it rotates three times on its axis for every two orbits around the Sun. This results in one day on Mercury lasting about 176 Earth days, leading to long periods of sunlight followed by long nights.</p>`;
            break;
        case 'venus':
            planetInfo = `
                <h2>Venus</h2>
                <p><strong>Namesake:</strong> Venus is named after the Roman goddess of love and beauty, reflecting its bright appearance in the sky.</p>
                <p><strong>Size:</strong> Venus has a radius of about 3,760 miles (6,052 kilometers), making it similar in size to Earth.</p>
                <p><strong>Distance:</strong> Venus orbits the Sun at an average distance of about 67 million miles (108 million kilometers), or 0.7 astronomical units (AU).</p>
                <p>Venus is known for its thick atmosphere, composed mainly of carbon dioxide, which creates a runaway greenhouse effect, making it the hottest planet in the Solar System, with surface temperatures averaging around 900°F (475°C). Its slow rotation and reverse direction of spin result in a day that lasts longer than a year on Venus—about 243 Earth days.</p>
                <p>The harsh conditions and extreme pressure at the surface make it an inhospitable environment for life as we know it, posing significant challenges to any missions sent to explore the planet.</p>`;
            break;
        case 'earth':
            planetInfo = `
                <h2>Earth</h2>
                <p><strong>Namesake:</strong> Earth derives its name from Old English and Germanic words meaning "ground" or "soil," reflecting its solid surface.</p>
                <p><strong>Size:</strong> Earth has a radius of about 3,959 miles (6,371 kilometers), making it the largest of the terrestrial planets.</p>
                <p><strong>Distance:</strong> Earth orbits the Sun at an average distance of 93 million miles (150 million kilometers), which is defined as 1 astronomical unit (AU).</p>
                <p>Earth is characterized by its diverse ecosystems and unique climate. The atmosphere, primarily composed of nitrogen and oxygen, supports a wide variety of life forms. With approximately 71% of its surface covered in water, Earth is unique in its ability to harbor life.</p>
                <p>It has one natural satellite, the Moon, which influences tides and stabilizes Earth's axial tilt. The combination of factors creates a dynamic environment that supports life in all its forms.</p>`;
            break;
        case 'mars':
            planetInfo = `
                <h2>Mars</h2>
                <p><strong>Namesake:</strong> Mars is named after the Roman god of war, reflecting its reddish appearance that resembles blood.</p>
                <p><strong>Size:</strong> Mars has a radius of about 2,106 miles (3,389 kilometers), making it roughly half the size of Earth.</p>
                <p><strong>Distance:</strong> Mars orbits the Sun at an average distance of about 142 million miles (228 million kilometers), or 1.5 astronomical units (AU).</p>
                <p>Mars is known as the Red Planet due to its reddish appearance caused by iron oxide on its surface. It has the largest volcano in the solar system, Olympus Mons, and a canyon system, Valles Marineris, that dwarfs the Grand Canyon.</p>
                <p>The planet has a thin atmosphere primarily composed of carbon dioxide and experiences significant temperature variations, ranging from -195°F (-125°C) in winter to 70°F (20°C) in summer. Evidence of past liquid water has led scientists to explore the possibility of life on Mars.</p>`;
            break;
        case 'jupiter':
            planetInfo = `
                <h2>Jupiter</h2>
                <p><strong>Namesake:</strong> Jupiter is named after the king of the Roman gods, reflecting its status as the largest planet in the Solar System.</p>
                <p><strong>Size:</strong> Jupiter has a radius of about 43,441 miles (69,911 kilometers), making it the largest planet in our Solar System.</p>
                <p><strong>Distance:</strong> Jupiter orbits the Sun at an average distance of about 484 million miles (778 million kilometers), or 5.2 astronomical units (AU).</p>
                <p>Jupiter is known for its prominent Great Red Spot, a massive storm that has raged for hundreds of years. Its atmosphere features bands of clouds that create a striking appearance, primarily composed of hydrogen and helium.</p>
                <p>The planet has a strong magnetic field and at least 79 moons, including Ganymede, the largest moon in the Solar System. Jupiter does not have a solid surface; instead, it has a dense atmosphere that gradually transitions into liquid hydrogen and metallic hydrogen at greater depths.</p>`;
            break;
        case 'saturn':
            planetInfo = `
                <h2>Saturn</h2>
                <p><strong>Namesake:</strong> Saturn is named after the Roman god of agriculture and wealth, often associated with the harvest.</p>
                <p><strong>Size:</strong> Saturn has a radius of about 36,183 miles (58,232 kilometers), making it the second-largest planet in the Solar System.</p>
                <p><strong>Distance:</strong> Saturn orbits the Sun at an average distance of about 886 million miles (1.43 billion kilometers), or 9.5 astronomical units (AU).</p>
                <p>Saturn is famous for its stunning rings, which are made up of ice particles, rocky debris, and dust. Like Jupiter, it is primarily composed of hydrogen and helium and has a total of at least 82 known moons, with Titan being the largest.</p>
                <p>Its rotation is relatively fast, taking about 10.7 hours to complete one day, while it has a long orbital period of approximately 29.5 Earth years to orbit the Sun.</p>`;
            break;
        case 'uranus':
            planetInfo = `
                <h2>Uranus</h2>
                <p><strong>Namesake:</strong> Uranus is named after the ancient Greek deity of the sky, reflecting its position in the outer Solar System.</p>
                <p><strong>Size:</strong> Uranus has a radius of about 15,759 miles (25,362 kilometers) and is classified as an ice giant.</p>
                <p><strong>Distance:</strong> Uranus orbits the Sun at an average distance of about 1.8 billion miles (2.9 billion kilometers), or 19.2 astronomical units (AU).</p>
                <p>Uranus is unique due to its bluish color and extreme axial tilt of 98 degrees, causing it to rotate on its side. This unusual tilt leads to extreme seasonal variations, with each pole experiencing 42 years of continuous sunlight followed by 42 years of darkness.</p>
                <p>Its atmosphere consists mainly of hydrogen, helium, and methane ice, contributing to its blue hue. The planet has a faint ring system and at least 27 known moons, with Miranda, Ariel, Umbriel, Titania, and Oberon being the largest.</p>`;
            break;
        case 'neptune':
            planetInfo = `
                <h2>Neptune</h2>
                <p><strong>Namesake:</strong> Neptune is named after the Roman god of the sea, reflecting its striking blue color.</p>
                <p><strong>Size:</strong> Neptune has a radius of about 15,299 miles (24,622 kilometers), making it another ice giant in the Solar System.</p>
                <p><strong>Distance:</strong> Neptune orbits the Sun at an average distance of about 2.8 billion miles (4.5 billion kilometers), or 30.1 astronomical units (AU).</p>
                <p>Neptune is known for its strong winds, which can reach speeds of up to 1,200 miles per hour (2,000 kilometers per hour). Its complex atmosphere features storms similar to Jupiter's Great Red Spot and has a faint ring system.</p>
                <p>Neptune has at least 14 known moons, with Triton being the largest and geologically active, showcasing geysers that spout nitrogen gas. The planet takes about 165 Earth years to complete one orbit around the Sun, resulting in extremely long seasons.</p>`;
            break;
        default:
            planetInfo = '<p>Information not available.</p>';
    }

    detailDiv.innerHTML = planetInfo;
    detailDiv.style.display = 'block';
    
    // Scroll to the planet detail section smoothly
    detailDiv.scrollIntoView({ behavior: 'smooth' });
}
