export default function(props){
    return <div className='cards'>
    <p className='aciklama'>{props.aciklama}</p>
    <h2 className='altBaslik'>{props.altbaslik}</h2>
    <p className='icerik'>{props.icerik}</p>
</div>
}