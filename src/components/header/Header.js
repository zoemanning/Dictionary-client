import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MenuItem, TextField } from '@mui/material';
import React from 'react'
import "./Header.css";
import categories from "../../data/Category";

const Header = ({ setCategory, category, word, setWord}) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
          mode: 'dark',
        },
      });

      const handleChange = (language) => {
          setCategory(language);
          setWord("");
      };

    return (
        <div>
            <span className="title">{word ? word : "Word Hunt"}</span>
        <div className='inputs'>
            <ThemeProvider theme= {darkTheme}>
                <TextField 
                    className='search'
                    label="Search a Word"
                        value={word}
                        onChange={(e)=> setWord(e.target.value)}
                    
                />
                <TextField
                className='select'
                    select
                    label="Language"
                    value={category}
                    onChange={(e)=> handleChange(e.target.value)}
                    helperText="Please select a language"
                >
                    {categories.map((option)=>(
                    <MenuItem
                    key={option.label} value={option.label}>
                    {option.value}
                    </MenuItem>
                    ))}
                </TextField>
             </ThemeProvider>
        </div>
        </div>
    )
}
export default Header