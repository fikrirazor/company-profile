import { useState, useEffect } from 'react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  quote: string;
  image: string;
}

const TEAM_QUOTES = [
  "Visual yang baik tidak hanya cantik, tapi juga cerdas.",
  "Cahaya adalah bahasa pertama fotografi.",
  "Strategi tanpa eksekusi bagus, kosong.",
  "Memahami kebutuhan klien adalah kunci."
];

function Teams() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=4');
        const data = await response.json();

        const members: TeamMember[] = data.results.map((user: any, index: number) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          position: `${user.location.city}, ${user.location.country}`,
          quote: TEAM_QUOTES[index] || "Visual yang baik tidak hanya cantik, tapi juga cerdas.",
          image: user.picture.large,
        }));

        setTeamMembers(members);
      } catch (error) {
        console.error('Failed to fetch team data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
    <div>
      <section className="hero py-20 bg-surface-dark/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
            OUR CREATIVE TEAM
          </h1>
          <p className="text-xl text-text-muted">
            Behind every great visual story is a team of passionate creators dedicated to bringing brands to life.
          </p>
        </div>
      </section>

      <section className="team py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Meet Our Talented Creators</h2>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-600">Loading team members...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex flex-col items-center text-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden mb-6 shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = 'https://via.placeholder.com/192?text=No+Photo';
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-text-muted mb-3">{member.position}</p>
                    <p className="italic text-text-main">"{member.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="culture py-20 bg-surface-dark/90 text-text-light">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-8">Our Culture & Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Creativity</h3>
              <p className="">
                We foster an environment where creative ideas can flourish and innovation thrives.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="">
                Our strength lies in our teamwork and shared commitment to visual excellence.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="">
                We maintain honesty and transparency in all our relationships and work.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Teams;