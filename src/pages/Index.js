import React from 'react'
import Text from '../components/atoms/text/Text'
import Header from '../components/atoms/text/Header'
import Paragraph from '../components/atoms/text/Paragraph'

class Index extends React.Component {
    constructor (props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    render () {
        return (
            <div>
                <Text style={{ width: '800px' }}>
                    <Header> A — Побег из тюрьмы </Header>
                    <Paragraph> Некоторая тюрьма может быть представлена в виде прямоугольной таблицы с <b>n</b> строками и <b>m</b> столбцами, каждая клетка которой — камера. Таким образом, всего есть <b>n⋅m</b> камер. В тюрьме n⋅m заключенных, по одному в каждой камере. Обозначим клетку-камеру в <b>i-й</b> строке и в <b>j-м</b> столбце как <b>(i,j)</b>. </Paragraph>
                    <Paragraph> В клетке <b>(r,c)</b> заключенные прорыли тоннель, который можно использовать для побега! Чтобы не попасться, они будут убегать ночью. </Paragraph>
                    <Paragraph> В начале ночи каждый заключенный находится в своей клетке. Когда наступает ночь, они могут начать двигаться в соседние клетки. Формально, за одну секунду заключенный, находящийся в клетке <b>(i,j)</b>, может переместиться в любую из клеток <b>(i−1,j)</b>, <b>(i+1,j)</b>, <b>(i,j−1)</b> или <b>(i,j+1)</b>, если они находятся на территории тюрьмы. Он также может остаться в клетке <b>(i,j)</b>. </Paragraph>
                    <Paragraph> Заключенные хотят знать минимальное необходимое время для того, чтобы все они смогли собраться в клетке <b>(r,c)</b> </Paragraph>
                </Text>
            </div>
        )
    }

    onChange (e) {
        this.setState({ value: e.target.value })
    }
}
export default Index
