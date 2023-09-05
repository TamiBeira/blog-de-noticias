import { useParams } from 'react-router-dom';

interface RouteParams {
  id: string;
}

function NewsDetailsPage() {
  const { id } = useParams<{ id: string }>(); // Use a desestruturação com o tipo correto

  // Lógica para obter os detalhes da notícia com base no ID

  return (
    <div>
      <h2>Detalhes da Notícia Fitness</h2>
      {/* Exibe os detalhes da notícia com base no ID */}
    </div>
  );
}

export default NewsDetailsPage;
