# First we will classify the type of animal, dog or cat
# Python 3.12
# Alan wuz here

# Loading Libraries
# Basic
import os
from os import makedirs
from os import listdir
from shutil import copyfile
from random import seed
from random import random
import numpy as np
import pandas as pd

# Visuals
import seaborn as sns
import matplotlib.pyplot as plt
from matplotlib.image import imread
from PIL import Image

# Scikit-learn
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, ConfusionMatrixDisplay

# Tensorflow
import tensorflow as tf
from keras.models import Sequential
from keras.preprocessing.image import ImageDataGenerator
from keras.layers import Dense, MaxPooling2D, Dropout, Flatten, BatchNormalization, Conv2D
from keras.callbacks import ReduceLROnPlateau, EarlyStopping


