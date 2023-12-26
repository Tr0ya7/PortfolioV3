import CertificatesInformations from '../json/certificatesInformations.json'
import CertificatesCard from './certificatesCard'

export default function Certificates() { 
    return (
        <section className="min-h-screen bg-vBlue800 p-10 text-center">
            <div className="font text-3xl">
                Certificados
            </div>
            <div>
                {CertificatesInformations.map((data) => 
                    <CertificatesCard 
                        key={data.id} 
                        title={data.title} 
                        institution={data.institution} 
                        duration={data.duration} 
                        year={data.year} 
                        href={data.link} 
                    />
                )}
            </div>
        </section> 
    )
}