import React from 'react'
import { useParams } from 'react-router-dom'
import { ArtAndDesign, ArtAndMusic, FinanceAndBusiness, HealthAndFitness, ITManagement, Marketing, Photography, TeachingAndStudy } from './index'

const JobCategorie = () => {
  const { categorie } = useParams()

  switch (categorie) {
    case 'art-design':
      return <ArtAndDesign />;
    case 'art-music':
      return <ArtAndMusic />;
    case 'finance-business':
      return <FinanceAndBusiness />;
    case 'health-fitness':
      return <HealthAndFitness />;
    case 'it-management':
      return <ITManagement />;
    case 'marketing':
      return <Marketing />;
    case 'photography':
      return <Photography />;
    case 'teaching-study':
      return <TeachingAndStudy />;
    default:
      break;
  }

  return (
    <div>
      {categorie}
    </div>
  )
}

export default JobCategorie
