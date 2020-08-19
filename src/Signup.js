import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import que from './images/que.png';

function Signup() {
  const days = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const years = [
    1780,
    1781,
    1782,
    1783,
    1784,
    1785,
    1786,
    1787,
    1788,
    1789,
    1790,
    1791,
    1792,
    1793,
    1794,
    1795,
    1796,
    1797,
    1798,
    1799,
    1800,
    1801,
    1802,
    1803,
    1804,
    1805,
    1806,
    1807,
    1808,
    1809,
    1810,
    1811,
    1812,
    1813,
    1814,
    1815,
    1816,
    1817,
    1818,
    1819,
    1820,
    1821,
    1822,
    1823,
    1824,
    1825,
    1826,
    1827,
    1828,
    1829,
    1830,
    1831,
    1832,
    1833,
    1834,
    1835,
    1836,
    1837,
    1838,
    1839,
    1840,
    1841,
    1842,
    1843,
    1844,
    1845,
    1846,
    1847,
    1848,
    1849,
    1850,
    1851,
    1852,
    1853,
    1854,
    1855,
    1856,
    1857,
    1858,
    1859,
    1860,
    1861,
    1862,
    1863,
    1864,
    1865,
    1866,
    1867,
    1868,
    1869,
    1870,
    1871,
    1872,
    1873,
    1874,
    1875,
    1876,
    1877,
    1878,
    1879,
    1880,
    1881,
    1882,
    1883,
    1884,
    1885,
    1886,
    1887,
    1888,
    1889,
    1890,
    1891,
    1892,
    1893,
    1894,
    1895,
    1896,
    1897,
    1898,
    1899,
    1900,
    1901,
    1902,
    1903,
    1904,
    1905,
    1906,
    1907,
    1908,
    1909,
    1910,
    1911,
    1912,
    1913,
    1914,
    1915,
    1916,
    1917,
    1918,
    1919,
    1920,
    1921,
    1922,
    1923,
    1924,
    1925,
    1926,
    1927,
    1928,
    1929,
    1930,
    1931,
    1932,
    1933,
    1934,
    1935,
    1936,
    1937,
    1938,
    1939,
    1940,
    1941,
    1942,
    1943,
    1944,
    1945,
    1946,
    1947,
    1948,
    1949,
    1950,
    1951,
    1952,
    1953,
    1954,
    1955,
    1956,
    1957,
    1958,
    1959,
    1960,
    1961,
    1962,
    1963,
    1964,
    1965,
    1966,
    1967,
    1968,
    1969,
    1970,
    1971,
    1972,
    1973,
    1974,
    1975,
    1976,
    1977,
    1978,
    1979,
    1980,
    1981,
    1982,
    1983,
    1984,
    1985,
    1986,
    1987,
    1988,
    1989,
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000,
    2001,
    2002,
    2003,
    2004,
    2005,
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  return (
    <div className='signup'>
      <div className='signup__header'>
        <span>Create an account</span>
      </div>
      <div className='signup__sub__header'>
        <span>It's quick and easy</span>
      </div>
      <div className='signup__form'>
        <div className='signup__fln'>
          <input type="text" placeholder='First name' />
          <input type="text" placeholder='Surname' />
        </div>
        <div className='signup__email'>
          <input type="text" placeholder='Mobile number or email address' />
        </div>
        <div className='signup__password'>
          <input type="password" placeholder='New password' />
        </div>
        <div className='signup__dob'>
          <div className='signup__dob__label'>Date of birth</div>
          <select className='form-control'>
            <option key='Day' value='Day'>
              Day
            </option>
            {days.map((day) => {
              return (
                <option key={day} value={day}>
                  {day}
                </option>
              );
            })}
          </select>
          <select className='form-control'>
            <option key='Month' value='Month'>
              Month
            </option>
            {months.map((month) => {
              return (
                <option key={month} value={month}>
                  {month}
                </option>
              );
            })}
          </select>
          <select className='form-control'>
            <option key='Year' value='Year'>
              Year
            </option>
            {years.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
          <Link to='/'>
            <img
              title='Click for more information'
              className='que__logo'
              src={que}
              alt='question'
            />
          </Link>
        </div>
        <div className='signup__gender'>
          <div className='signup__gender__label'>Gender</div>
          <div className='gender__type'>
            <input type='radio' name='gender' value='M' />
            <span>Male</span>
            <input type='radio' name='gender' value='F' />
            <span>Female</span>
            <input type='radio' name='gender' value='C' />
            <span>Custom</span>
            <Link to='/'>
              <img
                title='Click for more information'
                className='que__logo'
                src={que}
                alt='question'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='signup__text'>
        By clicking Sign Up, you agree to our <Link>Terms</Link>,{' '}
        <Link>Data Policy</Link> and <Link>Cookie Policy</Link>. You may receive
        SMS notifications from us and can opt out at any time.
      </div>
      <div className='signup__button__container'>
        <input class='signup__button' value='Sign Up' type='submit' />
      </div>
      <div className='signup__endtext'>
        <Link>Create a Page</Link> for a celebrity, band or business.
      </div>
    </div>
  );
}

export default Signup;
