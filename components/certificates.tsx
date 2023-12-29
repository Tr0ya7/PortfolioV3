import CertificatesInformations from '../json/certificatesInformations.json'
import CertificatesCard from './certificatesCard'

export default function Certificates() { 
    return (
        <section className="min-h-screen bg-vBlue800 p-10 text-center" id="certificates">
            <div className="font text-xl md:text-4xl">
                Certificados
            </div>
            <div className="flex flex-wrap justify-center gap-x-[20px] max-w-full">
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