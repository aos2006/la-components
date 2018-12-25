import React from 'react';
import _ from 'lodash';

import {
  createValidate,
  isEmptyArray,
  isEmptyString,
  isLatokenAddress,
  isPhoneNumber,
  isValidBTCAddress,
  isValidEthereumAddress,
  isValidNEOAddress,
  isValidNIMIQAddress,
} from './pureFunctions';

import { Trans } from 'react-i18next';

export const isRequired = {
  ...createValidate(v => {
    return v === undefined || v === null || isEmptyString(v);
  }, <Trans ns={'ComponentsLibrary'}>{t => t('Please fill in this field!')}</Trans>),
  validateType: 'requiredValidator',
};

export const isNotEmptyArray = {
  ...createValidate(
    isEmptyArray,
    <Trans ns={'ComponentsLibrary'}>{t => t('Please fill this field!')}</Trans>
  ),
  validateType: 'requiredValidator',
};

export const isNotEmptyImageList = {
  ...createValidate(
    isEmptyArray,
    <Trans ns={'ComponentsLibrary'}>{t => t('Please add image here!')}</Trans>
  ),
  validateType: 'requiredValidator',
};

export const isNotEmptyDocumentList = {
  ...createValidate(
    isEmptyArray,
    <Trans ns={'ComponentsLibrary'}>{t => t('Please add document here!')}</Trans>
  ),
  validateType: 'requiredValidator',
};

export const isConfirm = {
  ...createValidate(
    value => value !== true,
    <Trans ns={'ComponentsLibrary'}>
      {t => t('You must confirm this block before next actions')}
    </Trans>
  ),
  validateType: 'requiredValidator',
};

export const isBoolean = {
  ...createValidate(
    value => typeof value !== 'boolean',
    <Trans ns={'ComponentsLibrary'}>{t => t('You must fill this field!')}</Trans>
  ),
  validateType: 'requiredValidator',
};

export const isName = {
  pattern: /^[\s\dA-Za-z'.-]+$/gi,
  message: (
    <Trans ns={'ComponentsLibrary'}>{t => t("Please use latin characters and symbols '.-")}</Trans>
  ),
};

export const isAddress = {
  pattern: /^[\s\dA-Za-z,.\-"']+$/gi,
  message: (
    <Trans ns={'ComponentsLibrary'}>
      {t => t('Please use latin characters and symbols ,.-"\'')}
    </Trans>
  ),
};

export const notEnoughCharacters = {
  min: 2,
  message: <Trans ns={'ComponentsLibrary'}>{t => t('Not enough characters')}</Trans>,
};

export const maxCharacters = {
  max: 255,
  message: (
    <Trans ns={'ComponentsLibrary'}>{t => t('Maximum string length is 255 characters')}</Trans>
  ),
};

export const isNumber = {
  pattern: /^[\d]+$/gi,
  message: (
    <Trans ns={'ComponentsLibrary'}>
      {t => t('Numbers only, no dash or any other separator.')}
    </Trans>
  ),
  whitespace: true,
};

export const isFloatingNumber = {
  pattern: /^[+-]?([0-9]*[.])?[0-9]+$/gi,
  message: (
    <Trans ns={'ComponentsLibrary'}>
      {t => t('Numbers only, no dash or any other separator.')}
    </Trans>
  ),
  whitespace: true,
};

export const isWebsite = {
  pattern: /^((https?|s?ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
  message: <Trans ns={'ComponentsLibrary'}>{t => t('Website url not correct')}</Trans>,
};

export const isEmail = {
  pattern: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
  message: <Trans ns={'ComponentsLibrary'}>{t => t('E-mail not correct')}</Trans>,
};

export const isPositive = createValidate(
  v => _.isNumber(v) && v <= 0,
  <Trans ns={'ComponentsLibrary'}>{t => t('Positive number only!')}</Trans>
);

export const isNotLatokenAddress = createValidate(
  isLatokenAddress,
  <Trans ns={'ComponentsLibrary'}>{t => t("You can't use Latoken Ethereum address!")}</Trans>
);

// * Kits - grouping rules * //

export const phoneNumberRules = [
  isRequired,
  { min: 2 },
  createValidate(
    v => v && !isPhoneNumber(v.replace(/\D/g, '')),
    <Trans ns={'ComponentsLibrary'}>{t => t('Please enter valid phone number!')}</Trans>
  ),
];

export const ethereumAddress = [
  isRequired,
  createValidate(
    v => !isValidEthereumAddress(v, false),
    <Trans ns={'ComponentsLibrary'}>{t => t('Please enter valid address!')}</Trans>
  ),
];

export const btcAddress = [
  isRequired,
  createValidate(
    v => !isValidBTCAddress(v, false),
    <Trans ns={'ComponentsLibrary'}>{t => t('Please enter valid address!')}</Trans>
  ),
];

export const nimiqAddress = [
  isRequired,
  createValidate(
    v => !isValidNIMIQAddress(v, false),
    <Trans ns={'ComponentsLibrary'}>{t => t('Please enter valid address!')}</Trans>
  ),
];

export const neoAddress = [
  isRequired,
  createValidate(
    v => !isValidNEOAddress(v, false),
    <Trans ns={'ComponentsLibrary'}>{t => t('Please enter valid address!')}</Trans>
  ),
];

export const def = {
  name: [isName, notEnoughCharacters, maxCharacters],
  address: [isAddress, notEnoughCharacters],
};
