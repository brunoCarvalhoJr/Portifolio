import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Anchor, Link } from '../components/SVGs'

const Container = styled.div`
    position: relative;
`
const Slider = styled.div`
    position: fixed;
    top: 0;
    right: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transform: translateY(-100%);

    .chain{
        transform: rotate(135deg);
    }
`

const PreDisplay = styled.div`
    position: absolute;
    top:0;
    right: 2rem;
`

const AnchorI = styled(Anchor)`
    width: 70px;
    height:  70px;

    @media(max-width: 600px) {
        width: 30px;
        height: 30px;
    };
`

const LinkI = styled(Link)`
    width: 25px;
    height:  25px;

    @media(max-width: 600px) {
        width: 10px;
        height: 10px;
    };
`

const AnchorComponent = (props) => {

    const ref = useRef(null);
    const hiddenRef = useRef(null);

    useEffect(() => {
        
        const handleScroll = () => {

            let scrollPosition = window.pageYOffset;
            let windowSize = window.innerHeight;
            let bodyHeight = document.body.offsetHeight;
            let diff = Math.max(bodyHeight - (scrollPosition + windowSize) )
            let diffP = (diff * 100) / (bodyHeight - windowSize);

            if(ref.current != null)
                ref.current.style.transform = `translateY(${-diffP}%)`

            if(window.pageYOffset > 5){
                if(ref.current != null)
                    hiddenRef.current.style.display = 'none'
            }
            else{
                if(ref.current != null)
                    hiddenRef.current.style.display = 'block'
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () =>  window.removeEventListener('scroll', handleScroll)
    }, [])



    return (
        <Container>
        <PreDisplay ref={hiddenRef} className='hidden'>
        <AnchorI fill='#4F2F2E'/>
        </PreDisplay>
            <Slider ref={ref}>
                {
                    [...Array(props.number)].map((x,id) => {
                        return <LinkI key={id} width={25} height={25} fill='#4F2F2E' className="chain" />
                    })
                }
                <AnchorI fill='#4F2F2E'/>
            </Slider>
        </Container>
    )
}

export default AnchorComponent