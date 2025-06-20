import { SearchOutlined } from '@mui/icons-material'
import styled from 'styled-components'

const SearchBarContainer = styled.div`
    max-width: 550px;
    display: flex;
    width: 90%;
    width: 100%;
    border: 10x solid ${({ theme }) => theme.text_secondary +  90};
    border-radius: 8px;
    padding: 12px 16px;
    cursor: pointer;
    gap: 6px;
    align-items: center;
`;

const SearchBar = ({search, setSearch}) => {
  return (
    <SearchBarContainer>
        <SearchOutlined/>
        <input
            placeholder='Search with '
            style={{ 
                border: 'none', 
                outline: 'none',
                width: '100%',
                color: 'inherit',
                background: 'transparent'
            }}
            value ={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    </SearchBarContainer>
  )
}

export default SearchBar