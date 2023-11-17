import React from 'react';
import './styles/Encabezado.css';

const Encabezado = () => {
return (
    <div className='Encabezado-andres'>
        <header className='header-comp-andres'>
        <div className="navbar-andres">
            <div className="upper-icon-1-andres">
                <a href="icono-de-busqueda"><img src="/muffin.svg" alt="Icon 2" /></a>
            </div>
            <div className="upper-icon-2-andres">
                <a href="icono-de-barras"><img src="/icono-1.svg" alt="Icon 1" /></a>
            </div>
        </div>
        <div className="search-container-andres">
            <form action="/search" method="get">
                <div className="search-box-andres">
                    <span href="icono-de-busqueda"><img src="/icono-2.svg" alt="Icon 2" /></span>
                    <input type="text" name="query" placeholder="      Buscar..." />
                </div>
            </form>
        </div>
            
        <nav>
    <table class="menu-table-andres">
        <tr>
            <td>
                <a href="#">
                    <div class="menu-item-andres">
                        <img src="/pasteles.svg" alt="Pasteles" />
                        <span>Pasteles</span>
                    </div>
                </a>
            </td>
            <td>
                <a href="#">
                    <div class="menu-item-andres">
                        <img src="/chesco.svg" alt="ChescoMufins" />
                        <span>ChescoMufins</span>
                    </div>
                </a>
            </td>
        </tr>
        <tr>
            <td>
                <a href="#">
                    <div class="menu-item-andres">
                        <img src="/donas.svg" alt="Donas" />
                        <span>Donas</span>
                    </div>
                </a>
            </td>
            <td>
                <a href="#">
                    <div class="menu-item-andres">
                        <img src="/marrana.svg" alt="Marraquetas" />
                        <span>Marraquetas</span>
                    </div>
                </a>
            </td>
        </tr>
    </table>
</nav>
        </header>
    </div>
);
};

export default Encabezado;
