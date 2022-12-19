import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
    text: {
        fontSize: theme.fontSizes.body,
        color: theme.colors.textPrimary,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    bold: {
        fontWeight: theme.fontWeights.bold,
    },

    subheading: {
        fontSize: theme.fontSizes.subheading,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorSecondary: {
        color: theme.colors.textSecondary,
    },
    textAlignCenter: {
        textAlign: 'center',
    },
})

export default function StyledText({ children, align, color, fontSize, fontWeight, style, ...restOfProps }) {
    const textStyle = [
        styles.text,
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        align === 'center' && styles.textAlignCenter,
        style,
    ]

    return (
        <Text style={textStyle} {...restOfProps}>
            {children}
        </Text>
    )
}

//...restOfProps, es por si nos pasamos mas props de las que conremplamos antes
