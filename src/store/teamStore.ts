import { useState, useEffect } from 'react';

export interface Team {
  id: string;
  name: string;
  position: string;
  quote: string;
  image: string;
}

export const teamStore = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=4');
        const data = await response.json();

        const members: Team[] = data.results.map((user: any) => ({
          id: user.login.uuid,
          name: `${user.name.first} ${user.name.last}`,
          position: `${user.location.city}, ${user.location.country}`,
          quote: "Visual yang baik tidak hanya cantik, tapi juga cerdas.",
          image: user.picture.large,
        }));

        setTeams(members);
      } catch (error) {
        console.error('Failed to fetch team data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return { teams, loading };
};