  
export const Seo = ({ 
  title = 'Hola, React 19', 
  description = 'Description de la library' 
}) => {
  
  return (
    <>
        <title>{title}</title>
        <meta name="description" content={description} />
    </>
  )

}

/*
Seo.defaultProps = {
  title: 'Hola, React 19',
  description: 'Hey, react description'
}
*/
