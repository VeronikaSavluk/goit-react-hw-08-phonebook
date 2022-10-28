import { Vortex } from 'react-loader-spinner';

const Loader = () => {
    return (
        <Vortex
            visible={true}
            height="15"
            width="15"
            colors={['Dallas Cowboys Blue', 'Astros Navy', 'SteelBlue', 'CornflowerBlue', 'LightBlue', 'LightCyan']}
        />
    )
};

export default Loader;