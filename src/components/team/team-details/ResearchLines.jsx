import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { FaFlask } from 'react-icons/fa';
import { researcherService } from '../services/researcherServices';
import { useTranslation } from 'react-i18next'; 

const SectionHeader = styled(Typography)(({ theme }) => ({
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.text.primary,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(2),
    boxShadow: theme.shadows[1],
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: 'bold',
}));

const ResearchLinesContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
}));

const ResearchGridItem = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.default,
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        backgroundColor: theme.palette.action.hover,
        boxShadow: theme.shadows[1],
        transform: 'translateY(-2px)',
        borderRadius: theme.shape.borderRadius,
    },
    borderRadius: theme.shape.borderRadius,
}));

const ResearchLines = () => {
    const [lines, setLines] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        // Suscribirse al observable para recibir actualizaciones cuando cambie el investigador
        const subscription = researcherService.getResearcherObservable().subscribe((researcher) => {
            if (researcher) {
                const fetchedLines = researcherService.getResearchLines();
                setLines(fetchedLines);
            }
        });

        // Limpiar la suscripción al desmontar el componente
        return () => subscription.unsubscribe();
    }, []);

    return (
        <ResearchLinesContainer>
            <SectionHeader variant="h6">{t('researchLines')}</SectionHeader>
            <Grid container spacing={2}>
                {lines.map((line, index) => (
                    <Grid item xs={12} sm={6} key={index}>
                        <ResearchGridItem>
                            <FaFlask color="#4C3BCF" style={{ marginRight: 8 }} />
                            <Box>
                                <Typography variant="subtitle1">{line.linea_investigacion}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {t('active')}: {line.activa}
                                </Typography>
                            </Box>
                        </ResearchGridItem>
                    </Grid>
                ))}
            </Grid>
        </ResearchLinesContainer>
    );
};

export default ResearchLines;
