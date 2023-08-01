import './compCSS/datapage.css'
import BasicTable from './table'

export default function Datapage() {
    return (
        <div>
            <div className='dataPage'>
                <div className='navigation'>
                    <li>Department list</li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.91946 0.175421C3.1624 -0.0584297 3.55572 -0.0584297 3.79805 0.175421L8.93599 5.13333C9.42127 5.60162 9.42127 6.36133 8.93599 6.82962L3.76077 11.8244C3.52031 12.0559 3.13196 12.059 2.88839 11.8306C2.63985 11.5974 2.63675 11.2129 2.88156 10.976L7.61811 6.40569C7.86105 6.17125 7.86105 5.7917 7.61811 5.55726L2.91946 1.02327C2.67651 0.789422 2.67651 0.409265 2.91946 0.175421Z" fill="#9B9B9B" />
                        </svg>
                    </li>
                    <li>View Detail</li>
                </div>
                <div className='header-box'>
                    <div className='headerbox-1'>
                        <div className='img-div' id="img-1">
                            <img src='/images/icon-2.png' alt='icon-2' />
                        </div>
                        <div className='headerInfo'>
                            <h2>Forest Department</h2>
                            <p>Department Name</p>
                        </div>
                    </div>
                    <div className='headerbox-1'>
                        <div className='img-div' id="img-2">
                            <img src='/images/icon-3.png' alt='icon-3' />
                        </div>
                        <div className='headerInfo'>
                            <h2>XYZ Area, Jammu ,1123</h2>
                            <p>Department Location</p>
                        </div>
                    </div>
                </div>
                <div className='dataTable'>
                    <div className='upperDiv'>
                        <div className='Domain-btn-bar'>
                            <button className='btn-4'>
                                <svg className='plusSign' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                    <path d="M6.70825 11.5002H11.4999M11.4999 11.5002H16.2916M11.4999 11.5002V6.7085M11.4999 11.5002V16.2918" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M11.5 20.125C16.2635 20.125 20.125 16.2635 20.125 11.5C20.125 6.73654 16.2635 2.875 11.5 2.875C6.73654 2.875 2.875 6.73654 2.875 11.5C2.875 16.2635 6.73654 20.125 11.5 20.125Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>Add Domain</p>
                            </button>
                        </div>
                    </div>
                    <BasicTable />
                </div>
            </div>
        </div>
    )
}